import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core'
import { Gantt } from 'gantt_7/codebase/dhtmlxgantt'
import { jwtAuthService } from 'src/app/services/jwt'
import {
  IProjectSchedule,
  IProjectScheduleDto,
  IProjectScheduleResources,
  IProjectScheduleSettings,
  IResourceGantt,
  ITaskGroup,
} from '../../model/gantt'
import { ActivatedRoute, Router } from '@angular/router'
import fromCDN from 'from-cdn'
import { Location } from '@angular/common'
import { NzModalService, NzNotificationService } from 'ng-zorro-antd'
import { SecurityService } from 'src/app/services/security/security.service'
import { StoreService } from 'src/app/services/store/store.service'
import { ProjectScheduleTaskDetailsComponent } from '../project-schedule-task-details/project-schedule-task-details.component'
import { HolidayContentComponent } from '../../holiday/holiday-content/holiday-content.component'
import { GanttVersion, TaskType } from '../../model/enums'
import { DatePatternPipe } from 'src/app/services/date-pattern/date-pattern.pipe'

const Create = 1
const Update = 2
const Delete = 3

const ItemAction = {
  Details: 'details',
  AddJob: 'add_job',
  AddTask: 'add_task',
  Indent: 'indent',
  Outdent: 'outdent',
  Complete: 'complete',
  Delete: 'delete',
  Clear_Anchor: 'clear_anchor',
  Email: 'email',
  Resource_Gantt: 'resource_gantt',
  Convert_To_Job: 'convert_to_job',
  Convert_To_Task: 'convert_to_task',
  Convert_To_Project: 'convert_to_project',
  Convert_To_Milestone: 'convert_to_milestone',
}

declare let dhtmlXMenuObject: any
declare let gantt: any

@Component({
  selector: 'app-project-schedule',
  templateUrl: './project-schedule.component.html',
  styleUrls: ['./project-schedule.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DatePatternPipe],
})
export class ProjectScheduleComponent implements OnInit, AfterViewInit, OnDestroy {
  access: any

  taskGroupId: string
  jobId: string
  myCompanyId = this.store.UserInfo.CompanyId

  job: any

  resources: IProjectScheduleResources[] = []
  resourceOptions: string
  projectSchedule: IProjectSchedule = { tasks: [], links: [] }
  group: ITaskGroup
  holidays: string[]

  baselineLayerId: any
  anchorLayerId: any
  searchTerm: string

  jsLoading = true
  saveLoading: boolean

  selectedTask: any

  isTaskDetailsModalVisible = false
  isEmailModalVisible = false
  isCopyModalVisible = false
  isSaveAsTemplateModalVisible = false
  isHolidayModalVisible = false

  saveAsTemplateTitle: string
  saveAsTemplateCopyResources: boolean

  settings: IProjectScheduleSettings = this.store.ProjectScheduleSettings ?? {
    ShowGantt: true,
    ShowID: true,
    ShowStatus: true,
    ShowTaskName: true,
    ShowStart: true,
    ShowConfirmed: true,
    ShowCC: true,
    ShowResource: true,
    ShowDays: true,
    ShowProgress: true,
    ShowPredecessors: true,
    ShowSuccessors: true,
    ShowAdd: true,
    ShowContractedCompletionDate: true,
    ShowCompletedTasks: true,
    ShowCriticalPath: false,
    ShowDependencyLines: true,
    ShowBaselines: true,
    ShowAnchors: true,
    ShowRightSideText: true,
    ShowHolidays: true,
    GridWidth: 944,
    ColumnWidth: 50,
    WidthID: 40,
    WidthStatus: 50,
    WidthTaskName: 220,
    WidthStart: 80,
    WidthConfirmed: 80,
    WidthCC: 50,
    WidthResource: 120,
    WidthDays: 50,
    WidthProgress: 50,
    WidthPredecessors: 80,
    WidthSuccessors: 80,
    ChartView: 2,
    AutoSave: true,
  }

  timeleft: number
  intervalCounter: NodeJS.Timeout

  @ViewChild('gantt_single') ganttContainer: ElementRef
  @ViewChild(ProjectScheduleTaskDetailsComponent)
  taskDetailsComp: ProjectScheduleTaskDetailsComponent
  @ViewChild(HolidayContentComponent)
  holidayComp: HolidayContentComponent

  constructor(
    private apiService: jwtAuthService,
    private security: SecurityService,
    private route: ActivatedRoute,
    private location: Location,
    private notification: NzNotificationService,
    private modal: NzModalService,
    private store: StoreService,
    private datePatternPipe: DatePatternPipe,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const projectScheduleAcl = this.security.access(
      this.security.PROJECTSCHEDULE,
      this.jobId ? true : false,
    )
    this.access = {
      canDeleteProjectSchedule: projectScheduleAcl.Delete,
      canAddProjectSchedule: projectScheduleAcl.Add,
      canViewHolidays: this.security.access(this.security.HOLIDAY, this.jobId ? true : false).View,
    }
    this.taskGroupId = this.route.snapshot.params['taskGroupId']
    this.jobId = this.route.snapshot.params['jobId']
    if (this.jobId) {
      this.job = this.store.JobInfo
    }
  }

  ngAfterViewInit(): void {
    this.setSections(false)
    fromCDN([
      'https://cdn.dhtmlx.com/edge/dhtmlx.js?v=7.1.7',
      'https://cdn.dhtmlx.com/edge/dhtmlx.css',
    ])
      .then(() => {
        gantt = Gantt.getGanttInstance()
        const subs = this.apiService.getProjectScheduleResources().subscribe(
          response => {
            this.populateResources(response)
            this.configGantt()
            this.fetchProjectSchedule()
            subs.unsubscribe()
          },
          error => {
            this.apiService.validateError(error)
            this.cancel()
          },
        )
      })
      .catch(error => {
        this.apiService.validateError(error)
        this.cancel()
      })
  }

  ngOnDestroy(): void {
    this.setSections(true)
    this.stopCountdown()
    if (gantt) {
      gantt.destructor()
      gantt = null
    }
  }

  get isDirty(): boolean {
    this.projectSchedule.tasks = this.projectSchedule.tasks.filter(x => !(x.inserted && x.deleted))
    this.projectSchedule.links = this.projectSchedule.links.filter(x => !(x.inserted && x.deleted))
    const dirtyTasks = this.projectSchedule.tasks.filter(x => x.inserted || x.updated || x.deleted)
    const dirtyLinks = this.projectSchedule.links.filter(x => x.inserted || x.updated || x.deleted)
    const changedCount = dirtyTasks.length + dirtyLinks.length
    return changedCount > 0
  }

  get ContentLayout() {
    return {
      height: `${window.innerHeight - 106}px`,
    }
  }

  get PageTitle(): string {
    let result = null
    if (this.job) {
      result = `${this.job.JobNumber}`
      if (this.job.SiteName) {
        result = `${result} - ${this.job.SiteName}`
      }
    } else {
      result = this.group?.Title
    }
    return result
  }

  get SaveContinueTitle(): string {
    return this.settings.AutoSave ? `Auto saves in ${this.timeleft ?? ''}` : 'Save Now'
  }

  get TaskGroupIds(): string[] {
    return [this.taskGroupId]
  }

  setSections(value: boolean) {
    document.getElementById('web_menu_header').style.display = value ? 'block' : 'none'
    document.getElementById('mobile_menu_header').style.display = value ? 'block' : 'none'
    document.getElementById('breadcrumb_header').style.display = value ? 'block' : 'none'
    document.getElementById('footer_header').style.display = value ? 'block' : 'none'

    document.getElementById('body_header').style.overflowY = value ? 'auto' : 'hidden'
  }

  populateHolidays(holidays: string[]) {
    this.holidays = holidays
    if (this.settings.ShowHolidays) {
      holidays.forEach(x => {
        gantt.setWorkTime({ date: new Date(x), hours: false })
      })
    }
  }

  populateContractedCompletionDate(contracted_completion_date: string) {
    if (contracted_completion_date) {
      gantt.addMarker({
        start_date: new Date(contracted_completion_date),
        css: 'today',
      })
    }
  }

  populateResources(response: IProjectScheduleResources[]) {
    this.resources = response
    let options = ''
    this.resources.forEach(x => (options += `<option>${this.getResourceLabel(x)}</option>`))
    this.resourceOptions = options
  }

  getResourceLabel(item: IProjectScheduleResources): string {
    if (item.CompanyId == this.myCompanyId) {
      return `${item.FirstName} ${item.LastName}`
    } else {
      return `${item.CompanyName} - ${item.FirstName.substr(0, 1)}${item.LastName.substr(0, 1)}`
    }
  }

  configGantt() {
    gantt.plugins({
      auto_scheduling: true,
      critical_path: true,
      fullscreen: true,
      marker: true,
      multiselect: true,
      tooltip: true,
      undo: true,
    })

    this.enableExport()

    gantt.config.editor_types.resource_editor = {
      show: function(id, column, config, placeholder) {
        const html =
          "<div><input name='" +
          column.name +
          "' list='resources'><datalist id='resources'>'" +
          that.resourceOptions +
          "'</datalist></div>"
        placeholder.innerHTML = html
      },
      hide: function() {
        gantt.render()
      },

      set_value: function(value, id, column, node) {
        node.firstChild.firstChild.value = that.calcResourceLabel(value)
      },

      get_value: function(id, column, node) {
        const resource = that.resources.find(
          x => that.getResourceLabel(x) == node.firstChild.firstChild.value,
        )
        if (resource) {
          const task = gantt.getTask(id)
          task.color = resource.Colour
          return resource.PersonnelId
        } else {
          return ''
        }
      },

      is_changed: function(value, id, column, node) {
        const currentValue = this.get_value(id, column, node)
        return value !== currentValue
      },

      is_valid: function(value, id, column, node) {
        return true
      },

      save: function(id, column, node) {},
      focus: function(node) {
        node.firstChild.firstChild.select()
      },
    }

  const formatter = gantt.ext.formatters.durationFormatter({
    store: 'day',
    labels: {
      day: {
        full: '',
        plural: '',
      },
    },
  })

  const linksFormatter = gantt.ext.formatters.linkFormatter({
    durationFormatter: formatter,
    labels: {
      finish_to_start: '',
    },
  })

  let taskNumbers = null;

  function calculateAll(){
    taskNumbers = {};
    let index = 1;
    gantt.eachTask(function(task){
      taskNumbers[task.id] = index;
      index++;
    });
  }
  function resetCache(){
    taskNumbers = null; 
    return true;
  }

  gantt.getTaskNumber = function(task) {
    if(!taskNumbers){
      calculateAll()
    }
    task.RowNum = taskNumbers[task.id];
    return taskNumbers[task.id];
  };

  gantt.getTaskByNumber = function(number){
    for(var i in taskNumbers){
        if(taskNumbers[i] == number){
          return i; 
        }
    }
    return null;
  };

  gantt.attachEvent("onTaskCreated", resetCache);
  gantt.attachEvent("onAfterTaskMove", resetCache);
  gantt.attachEvent("onBeforeParse", resetCache);
  gantt.attachEvent("onAfterTaskDelete", resetCache);
  gantt.attachEvent("onAfterTaskAdd", resetCache);
  gantt.attachEvent("onAfterSort", resetCache);
  gantt.attachEvent("onAfterTaskUpdate", resetCache);
  gantt.attachEvent("onLightboxSave", resetCache);

  const linksByIndexFormatter = {
    format: function(link) {
      const formattedType = this.getFormattedLinkType(this.getLinkTypeName(link.type));
      const number = gantt.getTaskNumber(gantt.getTask(link.source));
      const lag = this.getLagString(link.lag);
  
      if (link.type === gantt.config.links.finish_to_start && !link.lag) {
        return number;
      } else {
        return `${number}${formattedType}${lag}`;
      }
    },
    parse: function(value) {
      if(!this.canParse(value)){
        return null;
      }

      const testString = /^[0-9\.]+[a-zA-Z]*/;

      const linkPart = testString.exec(value)[0].trim();
		  const lagPart = value.replace(linkPart, "").trim();

      const typeFormat = this.findTypeFormat(linkPart);
      const typeNumber = this.getLinkTypeNumber(typeFormat);
      const lag = this.parseLag(lagPart);
      
      const taskConfig = {
        id: undefined,
        source: gantt.getTaskByNumber(Number.parseInt(value)),
        target: null,
        type: typeNumber,
        lag
      };

      return taskConfig;
    },
    canParse (value: string) : boolean {
      const testString = /^[0-9\.]+[a-zA-Z]*/;
      return testString.test(value);
    },

    getLagString (lag: number) {
      if(!lag){
        return "";
      }
  
      let formatted = this.durationFormatter.format(lag);
      if (formatted.includes("day")) {
        formatted = formatted.replace(" day", "")
      }
      if (lag < 0) {
        return formatted;
      } else {
        return `+${formatted}`;
      }
    },

    getLinkTypeName (value: string) {
      let linkName = "";
      for(linkName in this.labels){
        if(gantt.config.links[linkName].toLowerCase() === value.toLowerCase()){
          break;
        }
      }
      if (linkName.includes("finish_to_start")) {
        linkName = linkName.replace("finish_to_start", "");
      }
      return linkName;
    },

    getFormattedLinkType (name: string) {
      return this.labels[name] || "";
    },

    findTypeFormat (value: string) {
      const format = value.replace(/[^a-zA-Z]/gi, "");
      let name = "finish_to_start";
      for (const i in this.labels){
        if (this.labels[i].toLowerCase() === format.toLowerCase()){
          name = i;
        }
      }
      return name;
    },

    getLinkTypeNumber (value: string) {
      let linkName = "";
      for(linkName in gantt.config.links){
        if(linkName.toLowerCase() === value.toLowerCase()){
          break;
        }
      }
      return gantt.config.links[linkName];
    },

    parseLag (value: string) {
      if(!value){
        return 0;
      }
      return this.durationFormatter.parse(value);
    },
    
    durationFormatter: gantt.ext.formatters.durationFormatter(),
    labels: {
        finish_to_finish: "FF",
        finish_to_start: "FS",
        start_to_start: "SS",
        start_to_finish: "SF"
    }
  };

  const successorsLinksFormatter = {
    format: function(link) {}
  };

  Object.assign(successorsLinksFormatter, linksByIndexFormatter);

  successorsLinksFormatter.format = function(link) {
    const formattedType = this.getFormattedLinkType(this.getLinkTypeName(link.type));
    const number = gantt.getTaskNumber(gantt.getTask(link.target));
    const lag = this.getLagString(link.lag);

    if (link.type === gantt.config.links.finish_to_start && !link.lag) {
      return number;
    } else {
      return `${number}${formattedType}${lag}`;
    }
  }

    const editors = {
      text: { type: 'text', map_to: 'text' },
      start_date: { type: 'date', map_to: 'start_date' },
      cost_centre: { type: 'text', map_to: 'cost_centre' },
      assigned_to_personnel_id: { type: 'resource_editor', map_to: 'assigned_to_personnel_id' },
      duration: { type: 'number', map_to: 'duration' },
      progress: { type: 'number', map_to: 'progress' },
      predecessors: { type: 'predecessor', map_to: 'auto', formatter: linksByIndexFormatter},
    }

    const addHeader =
      '<div class="gantt_grid_head_cell gantt_grid_head_add" onclick="gantt.createTask()"></div>'

    gantt.config.columns = [
      {
        name: 'index',
        label: 'ID',
        width: this.settings.WidthID,
        align: 'left',
        resize: true,
        template: function(task) {
          return gantt.getTaskNumber(task);
        }
      },
      {
        name: 'status',
        label: 'Status',
        width: this.settings.WidthStatus,
        align: 'center',
        resize: true,
        template: this.calcStatusIcon,
      },
      {
        name: 'text',
        label: 'Task Name',
        tree: true,
        width: this.settings.WidthTaskName,
        align: 'left',
        editor: editors.text,
        resize: true,
      },
      {
        name: 'start_date',
        label: 'Forecast',
        width: this.settings.WidthStart,
        align: 'center',
        editor: editors.start_date,
        resize: true,
      },
      {
        name: 'confirmed_start_date',
        label: 'Booked',
        width: this.settings.WidthConfirmed,
        align: 'center',
        resize: true,
        template: function(task) {
          return that.datePatternPipe.transform(task.confirmed_start, 'dd/MM/yyyy')
        },
      },
      {
        name: 'cost_centre',
        label: 'CC',
        width: this.settings.WidthCC,
        align: 'center',
        editor: editors.cost_centre,
        resize: true,
      },
      {
        name: 'assigned_to_personnel_id',
        label: 'Resource',
        width: this.settings.WidthResource,
        align: 'left',
        editor: editors.assigned_to_personnel_id,
        resize: true,
        template: function(task) {
          if (task.assigned_to_personnel_id) {
            return that.calcResourceLabel(task.assigned_to_personnel_id)
          } else {
            return ''
          }
        },
      },
      {
        name: 'duration',
        label: 'Days',
        width: this.settings.WidthDays,
        align: 'center',
        editor: editors.duration,
        resize: true,
      },
      {
        name: 'progress',
        label: '%',
        width: this.settings.WidthProgress,
        align: 'center',
        editor: editors.progress,
        resize: true,
      },
      {
        name: 'predecessors',
        label: 'Predecessors',
        width: this.settings.WidthPredecessors,
        align: 'center',
        editor: editors.predecessors,
        resize: true,
        template: function(task){
          const links = task.$target;
          const labels = [];
          for(let i = 0; i < links.length; i++){
              const link = gantt.getLink(links[i]);
              labels.push(linksByIndexFormatter.format(link)); 
          }
          return labels.join(", ");	
        }
      },
      {
        name: 'successors',
        label: 'Successors',
        width: this.settings.WidthSuccessors,
        align: 'center',
        resize: true,
        template: function(task) {
          const links = task.$source
          const labels = []
          for (let i = 0; i < links.length; i++) {
            const link = gantt.getLink(links[i])
            const pred = gantt.getTask(link.target)
            labels.push(successorsLinksFormatter.format(link));
          }
          return labels.join(', ')
        },
      },
      {
        name: 'add_custom',
        label: addHeader,
        width: 44,
        align: 'center',
        resize: false,
        template: function(task) {
          return '<div class="gantt_grid_head_add" data-action="add"></div>'
        },
      },
    ]

    this.showGanttChange(false)
    for (let i = 0; i < 12; i++) {
      this.showColumnChange(i, false)
    }
    this.showCriticalPathChange(false)
    this.showDependencyLinesChange(false)

    gantt.config.xml_date = '%Y-%m-%d'
    gantt.config.date_grid = '%d/%m/%Y'
    gantt.templates.tooltip_date_format = function(date) {
      const formatFunc = gantt.date.date_to_str('%d/%m/%Y')
      return formatFunc(date)
    }
    gantt.config.auto_scheduling = true
    gantt.config.auto_scheduling_strict = true
    gantt.config.auto_scheduling_initial = false
    gantt.config.deepcopy_on_parse = true
    gantt.config.work_time = true
    gantt.config.order_branch = true
    gantt.config.order_branch_free = true
    gantt.config.order_branch = 'marker'
    gantt.config.row_height = 24
    gantt.config.task_height = 16
    gantt.config.min_column_width = this.settings.ColumnWidth

    this.setView(this.settings.ChartView, false)
    this.showContractedCompletionDateChange(false)

    this.addContentMenu()

    gantt.init(this.ganttContainer.nativeElement)

    if (this.settings.ShowBaselines) {
      this.showBaselines()
    }
    if (this.settings.ShowAnchors) {
      this.showAnchors()
    }
    gantt.autoSchedule()
    this.showRightSideText()

    gantt.createDataProcessor({
      task: {
        create: (data: any) => this.createTask(data),
        update: (data: any) => this.updateTask(data),
        delete: (id: number) => this.deleteTask(id),
      },
      link: {
        create: (data: any) => this.createLink(data),
        update: (data: any) => this.updateLink(data),
        delete: (id: number) => this.deleteLink(id),
      },
    })

    const that = this

    gantt.$previous_id
    gantt.attachEvent('onMouseMove', function(id, e) {
      if (id && gantt.$previous_id != id) {
        if (gantt.$previous_id) {
          remove_highlight()
        }
        gantt.$previous_id = id
        add_highlight()
      }
    })

    function remove_highlight() {
      const elements = document.querySelectorAll(
        '.gantt_task_row[task_id="' + gantt.$previous_id + '"]',
      )
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('gantt_selected')
      }
    }

    function add_highlight() {
      const elements = document.querySelectorAll(
        '.gantt_task_row[task_id="' + gantt.$previous_id + '"]',
      )
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('gantt_selected')
      }
    }

    gantt.attachEvent('onBeforeTaskDisplay', function(id, task) {
      if (that.settings.ShowCompletedTasks) {
        return that.searchTerm
          ? task.text?.toLowerCase().includes(that.searchTerm.toLowerCase())
          : true
      } else {
        return (
          task.progress !== 100 &&
          (that.searchTerm
            ? task.text?.toLowerCase().includes(that.searchTerm.toLowerCase())
            : true)
        )
      }
    })

    gantt.attachEvent('onTaskLoading', function(task) {
      task.planned_start = gantt.date.parseDate(task.planned_start, 'xml_date')
      task.planned_end = gantt.date.parseDate(task.planned_end, 'xml_date')
      return true
    })

    gantt.attachEvent('onBeforeTaskAdd', function(id: number, new_item: any) {
      new_item.task_type_id = new_item.task_type_id ?? TaskType.Task
      new_item.type = gantt.config.types.task
      new_item.open = true
      new_item.$open = true
      new_item.task_group_id = that.taskGroupId
      new_item.task_id = that.apiService.Guid
      new_item.cost_centre = ''
      new_item.index = new_item.index ?? new_item.$index
      return true
    })

    gantt.attachEvent('onBeforeTaskUpdate', function(id: number, new_item: any) {
      if (new_item.progress < 0 || new_item.progress > 100) {
        return false
      }
      if (!new_item.duration && new_item.type != gantt.config.types.milestone) {
        return false
      }
      return true
    })

    gantt.attachEvent('onAfterTaskUpdate', function(id, item) {
      if (!item.parent) {
        return
      }

      const parentTask = gantt.getTask(item.parent)

      const childs = gantt.getChildren(parentTask.id)
      let totalProgress = 0

      let tempTask
      for (let i = 0; i < childs.length; i++) {
        tempTask = gantt.getTask(childs[i])
        totalProgress += parseFloat(tempTask.progress)
      }

      parentTask.progress = (totalProgress / childs.length).toFixed(0)
      gantt.updateTask(parentTask.id)
    })

    gantt.attachEvent('onBeforeLinkAdd', function(id, link) {
      link.task_group_id = that.taskGroupId
    })

    gantt.attachEvent('onBeforeLightbox', function(id: number) {
      const task = gantt.getTask(id)
      if (task.$new) {
        return true
      } else {
        that.selectedTask = task
        that.save(true, 1)
      }
    })

    gantt.attachEvent('onRowDragEnd', function(id, target) {
      that.reorderTasks()
    })

    gantt.attachEvent('onBeforeExpand', function() {
      that.fullScreenView(true)
      return true
    })

    gantt.attachEvent('onCollapse', function() {
      that.fullScreenView(false)
      return true
    })

    gantt.attachEvent('onTaskOpened', function(id) {
      that.updateParentTree(id, true)
    })

    gantt.attachEvent('onTaskClosed', function(id) {
      that.updateParentTree(id, false)
    })

    gantt.attachEvent('onTaskClick', function(id, e) {
      const button = e.target.closest('[data-action]')
      if (button) {
        const task = gantt.getTask(id)
        that.addTask(task, TaskType.Task, 'New Task')
        return false
      }
      return true
    })
    gantt.attachEvent("onTaskUnselected", function(id){
      gantt.ext.inlineEditors.save()
    });

    gantt.attachEvent('onGridResizeEnd', function(old_width, new_width) {
      that.settings.GridWidth = new_width
      return true
    })
  }

  private addContentMenu() {
    const that = this

    const menu = new dhtmlXMenuObject()
    menu.renderAsContextMenu()

    gantt.attachEvent('onContextMenu', function(taskId, linkId, event) {
      if (taskId) {
        setTimeout(function() {
          let selectedTasks = gantt.getSelectedTasks()
          if (selectedTasks.length > 0) {
            if (!selectedTasks.includes(taskId)) {
              selectedTasks.forEach(x => {
                gantt.unselectTask(x)
              })
            }
          }
          gantt.selectTask(taskId)
          selectedTasks = gantt.getSelectedTasks()
          if (selectedTasks.length > 0) {
            const x =
                event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
              y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop

            const target = event.target || event.srcElement
            const column_id = target.getAttribute('column_id')
            menu.clearAll()
            that.selectedTask = selectedTasks.length == 1 ? gantt.getTask(selectedTasks[0]) : null
            addColumnsConfig(selectedTasks.length)
            if (column_id) {
              addColumnToggle(column_id)
            }

            menu.showContextMenu(x, y)
            return false
          } else {
            return true
          }
        }, 1)
      } else {
        return true
      }
    })

    menu.attachEvent('onClick', function(id, zoneId, cas) {
      switch (id) {
        case ItemAction.Details:
          that.save(true, 1)
          break
        case ItemAction.AddJob:
          that.addTask(that.selectedTask, TaskType.Job, 'New Job')
          break
        case ItemAction.AddTask:
          that.addTask(that.selectedTask, TaskType.Task, 'New Task')
          break
        case ItemAction.Indent:
          that.indentTasks()
          break
        case ItemAction.Outdent:
          that.outdentTasks()
          break
        case ItemAction.Complete:
          that.completeTasks()
          break
        case ItemAction.Delete:
          that.deleteTasks()
          break
        case ItemAction.Clear_Anchor:
          that.clearAnchor()
          break
        case ItemAction.Email:
          that.save(true, 2)
          break
        case ItemAction.Resource_Gantt:
          that.save(true, 7)
          break
        case ItemAction.Convert_To_Job:
          that.updateTaskType(TaskType.Job, gantt.config.types.task)
          break
        case ItemAction.Convert_To_Task:
          that.updateTaskType(TaskType.Task, gantt.config.types.task)
          break
        case ItemAction.Convert_To_Project:
          that.updateTaskType(TaskType.Project, gantt.config.types.project)
          break
        case ItemAction.Convert_To_Milestone:
          that.updateTaskType(TaskType.Milestone, gantt.config.types.milestone)
          break
      }
      return true
    })

    function addColumnToggle(column_name) {
      const column = gantt.getGridColumn(column_name)
      const label = getColumnLabel(column)

      const item_id = 'toggle#' + column_name
      menu.addNewChild(null, -1, item_id, "Hide '" + label + "'", false)
      menu.addNewSeparator(item_id)
    }

    function addColumnsConfig(selectedCount: number) {
      if (that.selectedTask) {
        switch (that.selectedTask.task_type_id) {
          case TaskType.Job:
            menu.addNewChild(
              null,
              -1,
              ItemAction.Convert_To_Milestone,
              'Convert To Milestone',
              false,
            )
            menu.addNewChild(null, -1, ItemAction.Convert_To_Project, 'Convert To Project', false)
            menu.addNewChild(null, -1, ItemAction.Convert_To_Task, 'Convert To Task', false)
            break
          case TaskType.Task:
            menu.addNewChild(
              null,
              -1,
              ItemAction.Convert_To_Milestone,
              'Convert To Milestone',
              false,
            )
            menu.addNewChild(null, -1, ItemAction.Convert_To_Project, 'Convert To Project', false)
            menu.addNewChild(null, -1, ItemAction.Convert_To_Job, 'Convert To Job', false)
            break
          case TaskType.Project:
            menu.addNewChild(
              null,
              -1,
              ItemAction.Convert_To_Milestone,
              'Convert To Milestone',
              false,
            )
            menu.addNewChild(null, -1, ItemAction.Convert_To_Task, 'Convert To Task', false)
            menu.addNewChild(null, -1, ItemAction.Convert_To_Job, 'Convert To Job', false)
            break
          case TaskType.Milestone:
            menu.addNewChild(null, -1, ItemAction.Convert_To_Project, 'Convert To Project', false)
            menu.addNewChild(null, -1, ItemAction.Convert_To_Task, 'Convert To Task', false)
            menu.addNewChild(null, -1, ItemAction.Convert_To_Job, 'Convert To Job', false)
            break
        }
      }
      if (
        that.selectedTask &&
        that.selectedTask.task_type_id == TaskType.Job &&
        !that.group?.Template
      ) {
        menu.addNewChild(null, -1, ItemAction.Email, 'Email', false)
      }
      const suffix = selectedCount == 1 ? '' : ` ${selectedCount} Tasks`
      menu.addNewChild(null, -1, ItemAction.Resource_Gantt, `Resource Gantt${suffix}`, false)
      menu.addNewChild(null, -1, ItemAction.Clear_Anchor, `Clear Anchor${suffix}`, false)
      menu.addNewChild(null, -1, ItemAction.Delete, `Delete${suffix}`, false)
      menu.addNewChild(null, -1, ItemAction.Complete, `Complete${suffix}`, false)
      menu.addNewChild(null, -1, ItemAction.Outdent, `Outdent${suffix}`, false)
      menu.addNewChild(null, -1, ItemAction.Indent, `Indent${suffix}`, false)
      if (that.selectedTask) {
        menu.addNewChild(null, -1, ItemAction.AddTask, 'Add Task', false)
        menu.addNewChild(null, -1, ItemAction.AddJob, 'Add Job', false)
        menu.addNewChild(null, -1, ItemAction.Details, 'Details', false)
      }
    }

    function getColumnLabel(column) {
      if (column == null) {
        return ''
      }

      const locale = gantt.locale.labels
      let text = column.label !== undefined ? column.label : locale['column_' + column.name]

      text = text || column.name
      return text
    }
  }

  enableExport() {
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.src = 'https://export.dhtmlx.com/gantt/api.js'
    this.ganttContainer.nativeElement.appendChild(s)
    this.jsLoading = false
  }

  calcStatusIcon(task: any) {
    let taskIcon = ''
    switch (task.status) {
      case 1:
        taskIcon = '<img src="assets/images/sign_tick.png">'
        break
      case 2:
        taskIcon = '<img src="assets/images/sign_warning.png">'
        break
      case 3:
        taskIcon = '<img src="assets/images/sign_warn.png">'
        break
    }

    let emailIcon = ''
    switch (task.email_status) {
      case 0:
        emailIcon = '<img src="assets/images/email.png">'
        break
      case 1:
        emailIcon = '<img src="assets/images/email_open.png">'
        break
      case 2:
        emailIcon = '<img src="assets/images/emailError.png">'
        break
    }

    return `${taskIcon}${emailIcon}`
  }

  calcResourceLabel(value: string): string {
    const resource = this.resources.find(x => x.PersonnelId == value)
    return resource ? this.getResourceLabel(resource) : ''
  }

  fetchProjectSchedule() {
    const subs = this.apiService.getProjectSchedule(this.taskGroupId).subscribe(
      response => {
        if (response.group.GanttVersion < GanttVersion.Dhtmlx) {
          this.migrate()
        } else {
          this.populateData(response)
          const recordCount = response.tasks.length + response.links.length
          if (recordCount) {
            this.startCountdown()
          } else {
            this.copyTasks()
          }
        }
        subs.unsubscribe()
      },
      error => {
        this.apiService.validateError(error)
        this.cancel()
      },
    )
  }

  migrate() {
    this.modal.confirm({
      nzTitle: 'This version of gantt needs to be upgraded in order to proceed.',
      nzContent: 'Migrate?',
      nzOnOk: () => {
        const subs = this.apiService.migrateProjectSchedule(this.taskGroupId).subscribe(
          response => {
            this.populateData(response)
            const recordCount = response.tasks.length + response.links.length
            if (recordCount) {
              this.startCountdown()
            } else {
              this.copyTasks()
            }
            subs.unsubscribe()
          },
          error => {
            this.apiService.validateError(error)
            this.cancel()
          },
        )
      },
      nzOnCancel: () => {
        this.cancel()
      },
    })
  }

  copyTasks() {
    this.modal.confirm({
      nzTitle: 'No Tasks found.',
      nzContent: 'Copy Tasks?',
      nzOnOk: () => {
        this.setCopyModalVisible(true)
      },
      nzOnCancel: () => {
        this.startCountdown()
      },
    })
  }

  populateData(response: IProjectScheduleDto) {
    this.projectSchedule = {
      tasks: response.tasks,
      links: response.links,
    }
    gantt.parse({ data: response.tasks, links: response.links })
    this.group = response.group
    this.populateHolidays(response.holidays)
    this.populateContractedCompletionDate(response.contracted_completion_date)
  }

  addTask(task: any, task_type_id: number, text: string) {
    const position = gantt.getTaskIndex(task.id) + 1
    const index = gantt.getGlobalTaskIndex(task.id) + 1
    gantt.addTask(
      {
        text: text,
        start_date: task.start_date,
        constraint_date: task.constraint_date,
        duration: 1,
        task_type_id: task_type_id,
        index: index,
      },
      task.parent,
      position,
    )
  }

  indentTasks() {
    const that = this
    gantt.batchUpdate(function() {
      gantt.eachSelectedTask(function(task_id) {
        let prev_id = gantt.getPrevSibling(task_id)
        while (gantt.isSelectedTask(prev_id)) {
          prev_id = gantt.getPrevSibling(prev_id)
        }
        if (prev_id) {
          const index = that.projectSchedule.tasks.findIndex(x => x.id == task_id)
          that.projectSchedule.tasks[index].parent = prev_id
          that.projectSchedule.tasks[index].updated = true
          gantt.moveTask(task_id, gantt.getChildren(prev_id).length, prev_id)
          that.updateTaskType(TaskType.Project, gantt.config.types.project, prev_id)
        }
      })
    })
    gantt.refreshData()
  }

  outdentTasks() {
    const that = this
    gantt.batchUpdate(function() {
      gantt.eachSelectedTask(function(task_id) {
        const task = gantt.getTask(task_id)
        if (task.parent) {
          const parentTask = gantt.getTask(task.parent)
          that.updateTaskType(TaskType.Task, gantt.config.types.task, parentTask.id)
          const index = that.projectSchedule.tasks.findIndex(x => x.id == task_id)
          that.projectSchedule.tasks[index].parent = parentTask.parent
          that.projectSchedule.tasks[index].updated = true
          const nextSiblings: string[] = []
          let next_id = gantt.getNextSibling(task_id)
          while (next_id) {
            if (!gantt.isSelectedTask(next_id)) {
              const nextIndex = that.projectSchedule.tasks.findIndex(x => x.id == next_id)
              that.projectSchedule.tasks[nextIndex].parent = task_id
              that.projectSchedule.tasks[nextIndex].updated = true
              nextSiblings.push(next_id)
            }
            next_id = gantt.getNextSibling(next_id)
          }
          for (let i = 0; i < nextSiblings.length; i++) {
            gantt.moveTask(nextSiblings[i], i, task_id)
          }
          gantt.moveTask(task_id, gantt.getTaskIndex(parentTask.id) + 1, parentTask.parent)
        }
      })
    })
    gantt.refreshData()
    gantt.sort('sortorder')
  }

  completeTasks() {
    gantt.eachSelectedTask(function(task_id) {
      const task = gantt.getTask(task_id)
      task.progress = 100
      gantt.updateTask(task_id)
    })
    gantt.refreshData()
  }

  deleteTasks() {
    gantt.eachSelectedTask(function(task_id) {
      gantt.deleteTask(task_id)
    })
  }

  clearAnchor() {
    gantt.eachSelectedTask(function(task_id) {
      const task = gantt.getTask(task_id)
      task.constraint_date = null
      gantt.updateTask(task_id)
    })
    gantt.autoSchedule()
    gantt.refreshData()
  }

  updateTaskType(task_type_id: number, type: string, parentId?: number) {
    let task;
    if (parentId) {
      task = gantt.getTask(parentId)
    }
    else {
      task = gantt.getTask(this.selectedTask.id)
    }
    if (task.type == gantt.config.types.milestone) {
      task.duration = 1
    }
    if (type == gantt.config.types.milestone) {
      task.duration = 0
    }
    task.task_type_id = task_type_id
    task.type = type
    if (parentId) {
      gantt.updateTask(parentId);
    }
    else {
      gantt.updateTask(this.selectedTask.id)
    }
    gantt.refreshData()
  }

  copyTasksEmitter(response: IProjectScheduleDto) {
    gantt.clearAll()
    gantt.refreshData()
    gantt.init(this.ganttContainer.nativeElement)
    this.populateData(response)
    gantt.refreshData()
    gantt.init(this.ganttContainer.nativeElement)
    this.resetCountdown()
    this.setCopyModalVisible(false)
  }

  reorderTasks() {
    this.projectSchedule.tasks
      .filter(x => !x.deleted)
      .forEach(x => {
        const sortOrder = gantt.getGlobalTaskIndex(x.id) + 1
        if (x.sortorder != sortOrder) {
          x.sortorder = sortOrder
          x.updated = true
        }
      })

    this.projectSchedule.tasks.sort((a, b) => (a.sortorder > b.sortorder ? 1 : -1))
  }

  setTaskDetailsModalVisible(value: boolean) {
    this.isTaskDetailsModalVisible = value
  }

  taskDetailsEmitter() {
    if (this.taskDetailsComp.isRefreshGantt) {
      const selectedTask = this.selectedTask
      const subs = this.apiService.getProjectScheduleSingle(selectedTask.task_id).subscribe(
        response => {
          const task = gantt.getTask(selectedTask.id)
          task.planned_start = gantt.date.parseDate(response.planned_start, 'xml_date')
          task.planned_end = gantt.date.parseDate(response.planned_end, 'xml_date')
          task.confirmed_start = response.confirmed_start
          task.duration = response.duration
          task.progress = response.progress
          task.color = response.color
          task.task_type_id = response.task_type_id
          task.type = response.type
          task.status = response.status
          task.cost_centre = response.cost_centre
          task.assigned_to_personnel_id = response.assigned_to_personnel_id
          gantt.refreshTask(selectedTask.id)
          subs.unsubscribe()
        },
        error => {
          this.apiService.validateError(error)
        },
      )
    }
    this.setTaskDetailsModalVisible(false)
  }

  setEmailModalVisible(value: boolean) {
    if (value) {
      this.store.EmailDraft = {
        RelatedId: this.selectedTask.task_id,
        EmailTemplateId: null,
        PersonnelIds: null,
        CommId: null,
        CommType: 17,
      }
    }
    this.isEmailModalVisible = value
  }

  setCopyModalVisible(value: boolean) {
    this.isCopyModalVisible = value
    if (!value && this.settings.AutoSave) {
      if (!this.intervalCounter) {
        this.startCountdown()
      }
    }
  }

  setSaveAsTemplateModalVisible(value: boolean) {
    this.isSaveAsTemplateModalVisible = value
  }

  saveAsTemplate() {
    this.setSaveAsTemplateModalVisible(false)
    const body = {
      TaskGroupId: this.taskGroupId,
      Title: this.saveAsTemplateTitle,
      CopyResources: this.saveAsTemplateCopyResources,
    }
    const subs = this.apiService.saveProjectScheduleAsTemplate(body).subscribe(
      () => {
        this.saveAsTemplateTitle = null
        this.saveAsTemplateCopyResources = false
        this.notification.success('Project Schedule', 'Saved as Template.')
        subs.unsubscribe()
      },
      error => {
        this.apiService.validateError(error)
      },
    )
  }

  setHolidayModalVisible(value: boolean) {
    if (!value) {
      if (this.holidayComp.isRefreshGantt && this.settings.ShowHolidays) {
        this.settings.ShowHolidays = false
        this.showHolidaysChange(false)
        const holidays = []
        this.holidayComp.holidayList
          .filter(x => !x.IsNew)
          .forEach(x => {
            holidays.push(x.HolidayDate)
          })
        this.holidays = holidays
        this.settings.ShowHolidays = true
        this.showHolidaysChange(true)
      }
    }
    this.isHolidayModalVisible = value
  }

  resetCountdown() {
    if (this.settings.AutoSave) {
      this.stopCountdown()
      this.startCountdown()
    }
  }

  stopCountdown() {
    if (this.intervalCounter) {
      clearInterval(this.intervalCounter)
    }
  }

  startCountdown() {
    if (this.settings.AutoSave) {
      this.timeleft = 300
      this.intervalCounter = setInterval(() => {
        this.timeleft -= 1
        if (this.timeleft == 0) {
          if (!this.saveLoading) {
            this.save(true, 0)
          }
        }
      }, 1000)
    }
  }

  autoSaveChange() {
    if (this.settings.AutoSave) {
      this.resetCountdown()
    } else {
      this.stopCountdown()
    }
  }

  save(isContinue: boolean, action: number) {
    this.saveLoading = true

    this.projectSchedule.tasks = this.projectSchedule.tasks.filter(x => !(x.inserted && x.deleted))
    this.projectSchedule.links = this.projectSchedule.links.filter(x => !(x.inserted && x.deleted))

    const dirtyTasks = this.projectSchedule.tasks.filter(x => x.inserted || x.updated || x.deleted)
    dirtyTasks.forEach(x => {
      if (x.inserted) {
        x.action = Create
      } else if (x.deleted) {
        x.action = Delete
      } else {
        x.action = Update
      }
    })

    const dirtyLinks = this.projectSchedule.links.filter(x => x.inserted || x.updated || x.deleted)
    dirtyLinks.forEach(x => {
      if (x.inserted) {
        x.action = Create
      } else if (x.deleted) {
        x.action = Delete
      } else {
        x.action = Update
      }
    })

    const changedCount = dirtyTasks.length + dirtyLinks.length
    if (!changedCount) {
      if (isContinue) {
        this.saveLoading = false
        this.resetCountdown()
        this.nextSaveAction(action)
      } else {
        this.cancel()
      }
      return
    }

    const body: IProjectSchedule = {
      tasks: dirtyTasks,
      links: dirtyLinks,
    }

    const subs = this.apiService.patchProjectSchedule(body).subscribe(
      () => {
        if (isContinue) {
          this.projectSchedule.tasks = this.projectSchedule.tasks.filter(x => x.action != Delete)
          this.projectSchedule.tasks.forEach(x => {
            x.inserted = false
            x.updated = false
            x.deleted = false
            x.action = 0
          })
          this.projectSchedule.links = this.projectSchedule.links.filter(x => x.action != Delete)
          this.projectSchedule.links.forEach(x => {
            x.inserted = false
            x.updated = false
            x.deleted = false
            x.action = 0
          })
          this.saveLoading = false
          this.notification.success('Project Schedule', 'Data Saved.')
          this.resetCountdown()
          this.nextSaveAction(action)
        } else {
          this.projectSchedule = { tasks: [], links: [] }
          this.saveLoading = false
          this.cancel()
        }
        subs.unsubscribe()
      },
      error => {
        this.saveLoading = false
        this.apiService.validateError(error)
        this.resetCountdown()
      },
    )
  }

  nextSaveAction(action: number) {
    switch (action) {
      case 1:
        this.setTaskDetailsModalVisible(true)
        break
      case 2:
        this.setEmailModalVisible(true)
        break
      case 3:
        this.taskReport()
        break
      case 4:
        this.setSaveAsTemplateModalVisible(true)
        break
      case 5:
        this.setCopyModalVisible(true)
        break
      case 6:
      case 7:
        const resourceGantt: IResourceGantt = {
          SiteId: this.taskGroupId,
          Resources: [],
        }
        let mode = 0
        if (action == 6) {
          mode = 2
          const tasks = gantt.getTaskBy(task => task.assigned_to_personnel_id)
          tasks.forEach(task => {
            if (
              !resourceGantt.Resources.some(
                x => x.AssignedToPersonnelId == task.assigned_to_personnel_id,
              )
            ) {
              resourceGantt.Resources.push({
                AssignedToPersonnelId: task.assigned_to_personnel_id,
                ResourceName: this.calcResourceLabel(task.assigned_to_personnel_id),
              })
            }
          })
        } else if (action == 7) {
          mode = 3
          const that = this
          gantt.eachSelectedTask(function(task_id) {
            const task = gantt.getTask(task_id)
            if (task.assigned_to_personnel_id) {
              if (
                !resourceGantt.Resources.some(
                  x => x.AssignedToPersonnelId == task.assigned_to_personnel_id,
                )
              ) {
                resourceGantt.Resources.push({
                  AssignedToPersonnelId: task.assigned_to_personnel_id,
                  ResourceName: that.calcResourceLabel(task.assigned_to_personnel_id),
                })
              }
            }
          })
        }
        if (resourceGantt.Resources.length > 0) {
          this.store.ResourceGantt = resourceGantt
          this.router.navigate(['/home/resource-gantt/', mode])
        } else {
          this.notification.error('Project Schedule', `Tasks doesn't have Resource`)
        }
        break
    }
  }

  cancel() {
    this.location.back()
  }

  undo() {
    gantt.undo()
  }

  redo() {
    gantt.redo()
  }

  zoomIn() {
    this.settings.ColumnWidth += 5
    gantt.config.min_column_width = this.settings.ColumnWidth
    gantt.render()
  }

  zoomOut() {
    this.settings.ColumnWidth -= 5
    gantt.config.min_column_width = this.settings.ColumnWidth
    gantt.render()
  }

  fullScreen() {
    gantt.ext.fullscreen.toggle()
  }

  fullScreenView(value: boolean) {
    document.getElementById('main_header').style.display = value ? 'none' : 'block'
    document.getElementById('tools_single').style.display = value ? 'none' : 'block'
    document.getElementById('body_header').style.overflowY = 'hidden'
  }

  saveDefaults() {
    this.settings.WidthID = gantt.config.columns[0].width
    this.settings.WidthStatus = gantt.config.columns[1].width
    this.settings.WidthTaskName = gantt.config.columns[2].width
    this.settings.WidthStart = gantt.config.columns[3].width
    this.settings.WidthConfirmed = gantt.config.columns[4].width
    this.settings.WidthCC = gantt.config.columns[5].width
    this.settings.WidthResource = gantt.config.columns[6].width
    this.settings.WidthDays = gantt.config.columns[7].width
    this.settings.WidthProgress = gantt.config.columns[8].width
    this.settings.WidthPredecessors = gantt.config.columns[9].width
    this.settings.WidthSuccessors = gantt.config.columns[10].width
    this.store.ProjectScheduleSettings = this.settings
  }

  restoreDefaults() {
    const settings = this.store.ProjectScheduleSettings
    if (settings) {
      this.settings = settings
      this.showGanttChange(false)
      for (let i = 0; i < 11; i++) {
        switch (i) {
          case 0:
            gantt.config.columns[i].width = this.settings.WidthID
            break
          case 1:
            gantt.config.columns[i].width = this.settings.WidthStatus
            break
          case 2:
            gantt.config.columns[i].width = this.settings.WidthTaskName
            break
          case 3:
            gantt.config.columns[i].width = this.settings.WidthStart
            break
          case 4:
            gantt.config.columns[i].width = this.settings.WidthConfirmed
            break
          case 5:
            gantt.config.columns[i].width = this.settings.WidthCC
            break
          case 6:
            gantt.config.columns[i].width = this.settings.WidthResource
            break
          case 7:
            gantt.config.columns[i].width = this.settings.WidthDays
            break
          case 8:
            gantt.config.columns[i].width = this.settings.WidthProgress
            break
          case 9:
            gantt.config.columns[i].width = this.settings.WidthPredecessors
            break
          case 10:
            gantt.config.columns[i].width = this.settings.WidthSuccessors
            break
        }
      }
      for (let i = 0; i < 12; i++) {
        this.showColumnChange(i, false)
      }
      this.showContractedCompletionDateChange(false)
      this.showCriticalPathChange(false)
      this.showDependencyLinesChange(false)
      this.showBaselinesChange(false)
      this.showAnchorsChange(false)
      this.showRightSideTextChange(false)
      this.showHolidaysChange(false)
      this.setView(this.settings.ChartView, false)
      this.autoSaveChange()
      gantt.config.min_column_width = this.settings.ColumnWidth
      gantt.resetLayout()
    }
  }

  showGanttChange(isRefreshNow: boolean) {
    gantt.config.show_chart = this.settings.ShowGantt

    this.setLayout()

    if (isRefreshNow) {
      gantt.resetLayout()
    }
  }

  showColumnChange(index: number, isRefreshNow: boolean) {
    switch (index) {
      // case 0:
      //   gantt.getGridColumn('wbs').hide = !this.settings.ShowID
      //   break
      case 1:
        gantt.getGridColumn('status').hide = !this.settings.ShowStatus
        break
      case 2:
        gantt.getGridColumn('text').hide = !this.settings.ShowTaskName
        break
      case 3:
        gantt.getGridColumn('start_date').hide = !this.settings.ShowStart
        break
      case 4:
        gantt.getGridColumn('confirmed_start_date').hide = !this.settings.ShowConfirmed
        break
      case 5:
        gantt.getGridColumn('cost_centre').hide = !this.settings.ShowCC
        break
      case 6:
        gantt.getGridColumn('assigned_to_personnel_id').hide = !this.settings.ShowResource
        break
      case 7:
        gantt.getGridColumn('duration').hide = !this.settings.ShowDays
        break
      case 8:
        gantt.getGridColumn('progress').hide = !this.settings.ShowProgress
        break
      case 9:
        gantt.getGridColumn('predecessors').hide = !this.settings.ShowPredecessors
        break
      case 10:
        gantt.getGridColumn('successors').hide = !this.settings.ShowSuccessors
        break
      case 11:
        gantt.getGridColumn('add_custom').hide = !this.settings.ShowAdd
        break
    }
    if (isRefreshNow) {
      gantt.render()
    }
  }

  showContractedCompletionDateChange(isRefreshNow: boolean) {
    gantt.config.show_markers = this.settings.ShowContractedCompletionDate
    if (isRefreshNow) {
      gantt.render()
    }
  }

  showCriticalPathChange(isRefreshNow: boolean) {
    gantt.config.highlight_critical_path = this.settings.ShowCriticalPath
    if (isRefreshNow) {
      gantt.render()
    }
  }

  showDependencyLinesChange(isRefreshNow: boolean) {
    gantt.config.show_links = this.settings.ShowDependencyLines
    if (isRefreshNow) {
      gantt.render()
    }
  }

  showBaselinesChange(isRefreshNow: boolean) {
    if (this.settings.ShowBaselines) {
      this.showBaselines()
    } else {
      this.hideBaselines()
    }
    if (isRefreshNow) {
      gantt.render()
    }
  }

  showBaselines() {
    this.baselineLayerId = gantt.addTaskLayer(function draw_planned(task) {
      if (task.planned_start && task.planned_end) {
        const sizes = gantt.getTaskPosition(task, task.planned_start, task.planned_end)
        const el = document.createElement('div')
        el.className = 'baseline'
        el.style.left = sizes.left + 'px'
        el.style.width = sizes.width + 'px'
        el.style.top = sizes.top + gantt.config.task_height + 6 + 'px'
        return el
      }
      return false
    })
  }

  hideBaselines() {
    gantt.removeTaskLayer(this.baselineLayerId)
  }

  showAnchorsChange(isRefreshNow: boolean) {
    if (this.settings.ShowAnchors) {
      this.showAnchors()
    } else {
      this.hideAnchors()
    }
    if (isRefreshNow) {
      gantt.render()
    }
  }

  showAnchors() {
    function renderDiv(task, date, className) {
      const sizes = gantt.getTaskPosition(task, date)
      const el = document.createElement('div')
      el.className = className
      el.style.left = sizes.left + 'px'
      el.style.top = sizes.top + 'px'
      return el
    }

    this.anchorLayerId = gantt.addTaskLayer(function draw_deadline(task) {
      const constraintType = gantt.getConstraintType(task)
      const types = gantt.config.constraint_types
      if (constraintType != types.ASAP && constraintType != types.ALAP && task.constraint_date) {
        const dates = gantt.getConstraintLimitations(task)

        const els = document.createElement('div')

        if (dates.earliestStart) {
          els.appendChild(renderDiv(task, dates.earliestStart, 'constraint-marker earliest-start'))
        }

        if (dates.latestEnd) {
          els.appendChild(renderDiv(task, dates.latestEnd, 'constraint-marker latest-end'))
        }

        els.title =
          gantt.locale.labels[constraintType] +
          ' ' +
          gantt.templates.task_date(task.constraint_date)

        if (els.children.length) {
          return els
        }
      }
      return false
    })
  }

  hideAnchors() {
    gantt.removeTaskLayer(this.anchorLayerId)
  }

  showRightSideTextChange(isRefreshNow: boolean) {
    this.showRightSideText()
    if (isRefreshNow) {
      gantt.render()
    }
  }

  showRightSideText() {
    const that = this
    gantt.templates.rightside_text = function(start, end, task) {
      return that.settings.ShowRightSideText
        ? task.assigned_to_personnel_id
          ? that.calcResourceLabel(task.assigned_to_personnel_id)
          : task.text
        : null
    }
  }

  showHolidaysChange(isRefreshNow: boolean) {
    this.holidays.forEach(x => {
      const date = new Date(x)
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        if (this.settings.ShowHolidays) {
          gantt.setWorkTime({ date: date, hours: false })
        } else {
          gantt.setWorkTime({ date: date, hours: true })
        }
      }
    })
    if (isRefreshNow) {
      gantt.render()
    }
  }

  setLayout() {
    if (this.settings.ShowGantt) {
      gantt.config.layout = {
        css: 'gantt_container',
        cols: [
          {
            width: this.settings.GridWidth,
            rows: [
              { view: 'grid', scrollX: 'gridScroll', scrollable: true, scrollY: 'scrollVer' },
              { view: 'scrollbar', id: 'gridScroll', group: 'horizontal' },
            ],
          },
          { resizer: true, width: 1 },
          {
            rows: [
              { view: 'timeline', scrollX: 'scrollHor', scrollY: 'scrollVer' },
              { view: 'scrollbar', id: 'scrollHor', group: 'horizontal' },
            ],
          },
          { view: 'scrollbar', id: 'scrollVer' },
        ],
      }
    } else {
      gantt.config.layout = {
        css: 'gantt_container',
        rows: [
          {
            cols: [
              {
                // the default grid view
                view: 'grid',
                scrollX: 'scrollHor',
                scrollY: 'scrollVer',
              },
              { resizer: true, width: 1 },
              {
                // the default timeline view
                view: 'timeline',
                scrollX: 'scrollHor',
                scrollY: 'scrollVer',
              },
              {
                view: 'scrollbar',
                id: 'scrollVer',
              },
            ],
          },
          {
            view: 'scrollbar',
            id: 'scrollHor',
          },
        ],
      }
    }
  }

  changeView(value: number) {
    switch (value) {
      case 0:
      case 1:
        this.settings.ColumnWidth = 25
        break
      case 2:
        this.settings.ColumnWidth = 50
        break
      case 3:
        this.settings.ColumnWidth = 30
        break
    }
    gantt.config.min_column_width = this.settings.ColumnWidth
    this.setView(value, true)
  }

  setView(value: number, isRefreshNow: boolean) {
    this.settings.ChartView = value

    let isHighlight = false
    let weekScaleTemplate
    let daysStyle

    if (value == 0 || value == 1) {
      isHighlight = true
      weekScaleTemplate = date => {
        const dateToStr = gantt.date.date_to_str('%d %M')
        const weekNum = gantt.date.date_to_str('(%W)')
        const endDate = gantt.date.add(gantt.date.add(date, 1, 'week'), -1, 'day')
        return `${dateToStr(date)} - ${dateToStr(endDate)} ${weekNum(date)}`
      }
      daysStyle = function(date) {
        return date.getDay() === 0 || date.getDay() === 6 ? 'weekend' : ''
      }
    }

    let scales = []
    switch (value) {
      case 0:
        scales = [
          { unit: 'week', step: 1, format: weekScaleTemplate },
          { unit: 'day', step: 1, format: '%d', css: daysStyle },
        ]
        break
      case 1:
        scales = [
          { unit: 'month', step: 1, format: '%F %Y' },
          { unit: 'week', step: 1, format: weekScaleTemplate },
          { unit: 'day', step: 1, format: '%j', css: daysStyle },
        ]
        break
      case 2:
        scales = [
          { unit: 'month', step: 1, format: '%F %Y' },
          { unit: 'week', step: 1, format: '%d %M' },
        ]
        break
      case 3:
        scales = [
          { unit: 'year', step: 1, format: '%Y' },
          { unit: 'month', step: 1, format: '%F' },
        ]
        break
    }

    gantt.config.scales = scales
    gantt.templates.timeline_cell_class = function(task, date) {
      if (isHighlight && !gantt.isWorkTime({ task: task, date: date })) {
        return 'weekend'
      } else {
        return ''
      }
    }
    if (isRefreshNow) {
      gantt.render()
    }
  }

  expand() {
    const that = this
    gantt.eachTask(function(task) {
      task.$open = true
      that.updateParentTree(task.id, true)
    })
    gantt.refreshData()
  }

  collapse() {
    const that = this
    gantt.eachTask(function(task) {
      task.$open = false
      that.updateParentTree(task.id, false)
    })
    gantt.refreshData()
  }

  setBaselines() {
    const that = this
    gantt.eachTask(function(task) {
      task.planned_start = task.start_date
      task.planned_end = task.end_date
      that.updateBaselines(task.id, task.start_date, task.end_date)
    })
    gantt.refreshData()
  }

  clearBaselines() {
    const that = this
    gantt.eachTask(function(task) {
      task.planned_start = null
      task.planned_end = null
      that.updateBaselines(task.id, null, null)
    })
    gantt.refreshData()
  }

  clearAnchors() {
    const that = this
    gantt.eachTask(function(task) {
      task.constraint_date = null
      that.updateAnchors(task.id, null)
    })
    gantt.autoSchedule()
    gantt.refreshData()
  }

  onSelected(files: FileList) {
    const that = this

    gantt.importFromMSProject({
      data: files[0],
      callback: function(project) {
        if (project) {
          that.projectSchedule.tasks.forEach(x => {
            if (x.inserted) {
              that.projectSchedule.tasks = that.projectSchedule.tasks.filter(x => x.id !== x.id)
            } else {
              x.deleted = true
            }
          })
          that.projectSchedule.links.forEach(x => {
            if (x.inserted) {
              that.projectSchedule.links = that.projectSchedule.links.filter(x => x.id !== x.id)
            } else {
              x.deleted = true
            }
          })
          project.data.data.forEach((x, index) => {
            x.start_date = that.apiService.getServerFormattedDate(x.start_date)
            x.end_date = that.apiService.getServerFormattedDate(x.$raw.Finish)
            x.duration = Number(x.duration)
            x.task_type_id = TaskType.Task
            x.type = gantt.config.types.task
            x.task_id = that.apiService.Guid
            x.cost_centre = ''
            x.sortorder = index + 1
            x.inserted = true
            that.projectSchedule.tasks.push(x)
          })
          project.data.links.forEach(x => {
            x.inserted = true
            that.projectSchedule.links.push(x)
          })
          gantt.clearAll()
          gantt.parse(project.data)
        }
      },
    })
  }

  pdf() {
    gantt.exportToPDF({
      name: 'Project Schedule.pdf',
      raw: true,
    })
  }

  taskReport() {
    const subs = this.apiService.projectScheduleTaskReport(this.taskGroupId).subscribe(
      response => {
        const blob = new Blob([response], { type: response.type })
        const url = window.URL.createObjectURL(blob)
        window.open(url)
        subs.unsubscribe()
      },
      error => {
        this.apiService.validateBlobError(error)
      },
    )
  }

  delete() {
    this.modal.confirm({
      nzTitle: 'Confirm Delete',
      nzContent: 'Are you sure?',
      nzOnOk: () => {
        const subs = this.apiService.deleteProjectSchedule(this.taskGroupId).subscribe(
          () => {
            this.projectSchedule = {
              tasks: [],
              links: [],
            }
            this.resetCountdown()
            gantt.clearAll()
            subs.unsubscribe()
          },
          error => {
            this.apiService.validateError(error)
          },
        )
      },
    })
  }

  refreshData() {
    gantt.refreshData()
  }

  createTask(data: any) {
    data.start_date = this.apiService.getServerFormattedDate(data.start_date)
    data.end_date = this.apiService.getServerFormattedDate(data.end_date)
    data.constraint_date = this.apiService.getServerFormattedDate(data.constraint_date)
    data.sortorder = data.index + 1
    data.inserted = true
    this.projectSchedule.tasks.splice(data.index, 0, data)

    for (let i = data.sortorder; i < this.projectSchedule.tasks.length; i++) {
      this.projectSchedule.tasks[i].sortorder = this.projectSchedule.tasks[i].sortorder + 1
      this.projectSchedule.tasks[i].updated = true
    }
  }

  updateTask(data: any) {
    const index = this.projectSchedule.tasks.findIndex(x => x.id == data.id)
    this.projectSchedule.tasks[index].text = data.text
    this.projectSchedule.tasks[index].start_date = this.apiService.getServerFormattedDate(
      data.start_date,
    )
    this.projectSchedule.tasks[index].end_date = this.apiService.getServerFormattedDate(
      data.end_date,
    )
    this.projectSchedule.tasks[index].constraint_date = this.apiService.getServerFormattedDate(
      data.constraint_date,
    )
    this.projectSchedule.tasks[index].color = data.color
    this.projectSchedule.tasks[index].duration = data.duration
    this.projectSchedule.tasks[index].progress = data.progress
    this.projectSchedule.tasks[index].parent = data.parent
    this.projectSchedule.tasks[index].task_type_id = data.task_type_id
    this.projectSchedule.tasks[index].type = data.type
    this.projectSchedule.tasks[index].cost_centre = data.cost_centre
    this.projectSchedule.tasks[index].assigned_to_personnel_id = data.assigned_to_personnel_id
    this.projectSchedule.tasks[index].updated = true
  }

  deleteTask(id: number) {
    const index = this.projectSchedule.tasks.findIndex(x => x.id == id)

    for (let i = index + 1; i < this.projectSchedule.tasks.length; i++) {
      this.projectSchedule.tasks[i].sortorder = this.projectSchedule.tasks[i].sortorder - 1
      this.projectSchedule.tasks[i].updated = true
    }

    this.projectSchedule.tasks[index].deleted = true
  }

  createLink(data: any) {
    data.inserted = true
    this.projectSchedule.links.push(data)
  }

  updateLink(data: any) {
    const index = this.projectSchedule.links.findIndex(x => x.id == data.id)
    this.projectSchedule.links[index].lag = data.lag
    this.projectSchedule.links[index].type = data.type
    this.projectSchedule.links[index].source = data.source
    this.projectSchedule.links[index].target = data.target
    this.projectSchedule.links[index].updated = true
  }

  deleteLink(id: number) {
    const index = this.projectSchedule.links.findIndex(x => x.id == id)
    this.projectSchedule.links[index].deleted = true
  }

  updateParentTree(id: number, open: boolean) {
    const index = this.projectSchedule.tasks.findIndex(x => x.id == id)
    if (this.projectSchedule.tasks[index].open != open) {
      this.projectSchedule.tasks[index].open = open
      this.projectSchedule.tasks[index].updated = true
    }
  }

  updateBaselines(id: number, planned_start: string, planned_end: string) {
    const index = this.projectSchedule.tasks.findIndex(x => x.id == id)
    this.projectSchedule.tasks[index].planned_start = planned_start
    this.projectSchedule.tasks[index].planned_end = planned_end
    this.projectSchedule.tasks[index].updated = true
  }

  updateAnchors(id: number, constraint_date: string) {
    const index = this.projectSchedule.tasks.findIndex(x => x.id == id)
    this.projectSchedule.tasks[index].constraint_date = constraint_date
    this.projectSchedule.tasks[index].updated = true
  }
}
