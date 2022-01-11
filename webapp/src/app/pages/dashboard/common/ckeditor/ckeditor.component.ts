import { Component, Input, OnInit } from '@angular/core'
import { jwtAuthService } from 'src/app/services/jwt'
import { StoreService } from 'src/app/services/store/store.service'

const COMM_EMAIL = 1
const JOB_DETAILS = 2
const ORDERS = 3
const DEFAULT = 0

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.scss'],
})
export class CkeditorComponent implements OnInit {
  @Input() htmlInput: string
  @Input() modeInput: number

  editorConfig: any

  constructor(private store: StoreService, private apiService: jwtAuthService) {}

  ngOnInit(): void {
    this.editorConfig = {
      autoGrow_bottomSpace: 50,
      autoGrow_minHeight: 250,
      autoGrow_maxHeight: 600,
      autoGrow_onStartup: true,
      extraPlugins: 'autogrow',
      fileTools_requestHeaders: {
        Authorization: `Bearer ${this.store.UserInfo.Token}`,
      },
      filebrowserWindowWidth: '50%',
      filebrowserWindowHeight: '50%',
      filebrowserBrowseUrl: '/auth/ckeditor-browser/4',
      filebrowserUploadUrl: this.apiService.HtmlImageUploadApi,
      toolbar: this.Toolbar,
      width: 800,
      allowedContent: true,
      protectedSource: /<i[^>]*><\/i>/g,
    }
  }

  get html() {
    return this.htmlInput
  }

  get Toolbar() {
    switch (this.modeInput) {
      case COMM_EMAIL:
        return [
          { name: 'group5', items: ['Link', 'Unlink', 'Anchor'] },
          {
            name: 'group7',
            items: [
              'Bold',
              'Italic',
              'Underline',
              'JustifyLeft',
              'JustifyCenter',
              'JustifyRight',
              'JustifyBlock',
            ],
          },
          {
            name: 'group8',
            items: [
              'NumberedList',
              'BulletedList',
              '-',
              'Outdent',
              'Indent',
              'TextColor',
              'BGColor',
            ],
          },
          { name: 'group9', items: ['Font'] },
          { name: 'group10', items: ['FontSize'] },
        ]
      case JOB_DETAILS:
      case ORDERS:
        return [
          {
            name: 'group7',
            items: ['Bold', 'Italic', 'Underline'],
          },
          {
            name: 'group8',
            items: ['TextColor', 'BGColor'],
          },
          {
            name: 'group2',
            items: ['RemoveFormat'],
          },
        ]
      case DEFAULT:
        return [
          {
            name: 'group1',
            items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', 'Preview', 'Print'],
          },
          {
            name: 'group2',
            items: ['Undo', 'Redo', '-', 'Find', 'Replace', 'Blockquote', 'Smiley', 'RemoveFormat'],
          },
          { name: 'group3', items: ['Styles'] },
          { name: 'group4', items: ['Format'] },
          { name: 'group5', items: ['Link', 'Unlink', 'Anchor'] },
          { name: 'group6', items: ['ShowBlocks', 'Maximize'] },
          '/',
          {
            name: 'group7',
            items: [
              'Bold',
              'Italic',
              'Underline',
              'JustifyLeft',
              'JustifyCenter',
              'JustifyRight',
              'JustifyBlock',
            ],
          },
          {
            name: 'group8',
            items: [
              'NumberedList',
              'BulletedList',
              '-',
              'Outdent',
              'Indent',
              'TextColor',
              'BGColor',
            ],
          },
          { name: 'group9', items: ['Font'] },
          { name: 'group10', items: ['FontSize'] },
          { name: 'group11', items: ['Image', 'Table', 'HorizontalRule', 'SpecialChar', 'Source'] },
        ]
    }
  }

  get IsInline() {
    switch (this.modeInput) {
      case COMM_EMAIL:
      case DEFAULT:
        return false
      case JOB_DETAILS:
      case ORDERS:
        return true
    }
  }

  get Class(): string {
    switch (this.modeInput) {
      case COMM_EMAIL:
      case DEFAULT:
        return ''
      case JOB_DETAILS:
        return 'inline-width'
      case ORDERS:
        return 'orders-inline-width'
    }
  }
}
