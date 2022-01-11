export interface IHoliday extends IHolidayCmd {
  State: string
}

export interface IHolidayCmd {
  HolidayId: string
  HolidayDate: string
  Description: string
  BackColour: string
  GanttText: string
  IsEditing?: boolean
  IsNew?: boolean
  Error?: string
}
