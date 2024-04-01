---

database-plugin: basic

---

```yaml:dbfolder
name: meetings
description: meetings
columns:
  __file__:
    key: __file__
    id: __file__
    input: markdown
    label: File
    accessorKey: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    position: 1
    isHidden: true
    sortIndex: -1
    width: 100
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      content_alignment: text-align-left
      wrap_content: false
  type:
    input: tags
    accessorKey: type
    key: type
    id: type
    label: type
    position: 3
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 290
    options:
      - { label: "121", value: "121", color: "hsl(123, 95%, 90%)"}
      - { label: "devsync", value: "DevSync", color: "hsl(277, 95%, 90%)"}
      - { label: "archsync", value: "archsync", color: "hsl(351, 95%, 90%)"}
      - { label: "k8s", value: "k8s", color: "hsl(221, 95%, 90%)"}
      - { label: "duty", value: "duty", color: "hsl(164, 95%, 90%)"}
      - { label: "grooming", value: "grooming", color: "hsl(184, 95%, 90%)"}
      - { label: "platform", value: "platform", color: "hsl(267, 95%, 90%)"}
      - { label: "backend", value: "backend", color: "hsl(68, 95%, 90%)"}
      - { label: "interview", value: "interview", color: "hsl(82, 95%, 90%)"}
      - { label: "qa sync", value: "qa sync", color: "hsl(328, 95%, 90%)"}
      - { label: "product command", value: "product command", color: "hsl(332, 95%, 90%)"}
      - { label: "daily", value: "daily", color: "hsl(97, 95%, 90%)"}
      - { label: "techsync", value: "techsync", color: "hsl(145, 95%, 90%)"}
      - { label: "productdev", value: "productdev", color: "hsl(153, 95%, 90%)"}
      - { label: "inc", value: "inc", color: "hsl(220, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      option_source: manual
      content_alignment: text-align-left
  date:
    input: calendar
    accessorKey: date
    key: date
    id: date
    label: date
    position: 4
    skipPersist: false
    isHidden: false
    sortIndex: 1
    isSorted: true
    isSortedDesc: true
    width: 137
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      footer_formula: 
  people:
    input: text
    accessorKey: people
    key: people
    id: people
    label: people
    position: 2
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 240
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      wrap_content: true
      content_alignment: text-align-left
config:
  remove_field_when_delete_column: false
  cell_size: normal
  sticky_first_column: false
  group_folder_column: 
  remove_empty_folders: false
  automatically_group_files: false
  hoist_files_with_empty_attributes: true
  show_metadata_created: false
  show_metadata_modified: false
  show_metadata_tasks: false
  show_metadata_inlinks: false
  show_metadata_outlinks: false
  show_metadata_tags: false
  source_data: query
  source_form_result: "FROM  \"MeetingNotes\" and !\"MeetingNotes/Собеседования\""
  source_destination_path: MeetingNotes
  row_templates_folder: templates
  current_row_template: templates/ArchSync.md
  pagination_size: 50
  font_size: 16
  enable_js_formulas: false
  formula_folder_path: /
  inline_default: false
  inline_new_position: top
  date_format: yyyy-MM-dd
  datetime_format: "yyyy-MM-dd HH:mm:ss"
  metadata_date_format: "yyyy-MM-dd HH:mm:ss"
  enable_footer: true
  implementation: default
filters:
  enabled: false
  conditions:
```