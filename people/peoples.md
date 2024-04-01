---

database-plugin: basic

---

```yaml:dbfolder
name: new database
description: new description
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
    isHidden: false
    sortIndex: 1
    isSorted: true
    isSortedDesc: false
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Position:
    input: tags
    accessorKey: Position
    key: Position
    id: Position
    label: Position
    position: 2
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 208
    options:
      - { label: "Head of mobile", value: "Head of mobile", color: "hsl(85, 95%, 90%)"}
      - { label: "CTO", value: "CTO", color: "hsl(269, 95%, 90%)"}
      - { label: "Head of PMO", value: "Head of PMO", color: "hsl(244, 95%, 90%)"}
      - { label: "Head of Web", value: "Head of Web", color: "hsl(288, 95%, 90%)"}
      - { label: "Deputy CTO", value: "Deputy CTO", color: "hsl(33, 95%, 90%)"}
      - { label: "Head of backend", value: "Head of backend", color: "hsl(51, 95%, 90%)"}
      - { label: "Head of Hostel", value: "Head of Hostel", color: "hsl(4, 95%, 90%)"}
      - { label: "Teamlead", value: "Teamlead", color: "hsl(64, 95%, 90%)"}
      - { label: "Head", value: "Head", color: "hsl(348, 95%, 90%)"}
      - { label: "Project", value: "Project", color: "hsl(167, 95%, 90%)"}
      - { label: "System analytic", value: "System analytic", color: "hsl(256, 95%, 90%)"}
      - { label: "Techlead", value: "Techlead", color: "hsl(260, 95%, 90%)"}
      - { label: "Head of QA", value: "Head of QA", color: "hsl(134, 95%, 90%)"}
      - { label: "Developer", value: "Developer", color: "hsl(282, 95%, 90%)"}
      - { label: "Python", value: "Python", color: "hsl(210, 95%, 90%)"}
      - { label: "CMO", value: "CMO", color: "hsl(192, 95%, 90%)"}
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
  Start_work:
    input: calendar
    accessorKey: Start_work
    key: Start_work
    id: Start_work
    label: Start work
    position: 4
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Location:
    input: tags
    accessorKey: Location
    key: Location
    id: Location
    label: Location
    position: 5
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 260
    options:
      - { label: "Валенсия", value: "Валенсия", color: "hsl(228, 95%, 90%)"}
      - { label: "Испания", value: "Испания", color: "hsl(165, 95%, 90%)"}
      - { label: "Грузия", value: "Грузия", color: "hsl(24, 95%, 90%)"}
      - { label: "Кипр", value: "Кипр", color: "hsl(194, 95%, 90%)"}
      - { label: "Сербия", value: "Сербия", color: "hsl(17, 95%, 90%)"}
      - { label: "Тбилиси", value: "Тбилиси", color: "hsl(244, 95%, 90%)"}
      - { label: "РФ", value: "РФ", color: "hsl(248, 95%, 90%)"}
      - { label: "Москва", value: "Москва", color: "hsl(139, 95%, 90%)"}
      - { label: "Таиланд", value: "Таиланд", color: "hsl(138, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Command:
    input: tags
    accessorKey: Command
    key: Command
    id: Command
    label: Command
    position: 3
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 209
    options:
      - { label: "PMO", value: "PMO", color: "hsl(28, 95%, 90%)"}
      - { label: "Core", value: "Core", color: "hsl(35, 95%, 90%)"}
      - { label: "AI", value: "AI", color: "hsl(129, 95%, 90%)"}
      - { label: "Mobile", value: "Mobile", color: "hsl(107, 95%, 90%)"}
      - { label: "Web", value: "Web", color: "hsl(17, 95%, 90%)"}
      - { label: "Backend", value: "Backend", color: "hsl(188, 95%, 90%)"}
      - { label: "Hostel", value: "Hostel", color: "hsl(137, 95%, 90%)"}
      - { label: "CRM", value: "CRM", color: "hsl(265, 95%, 90%)"}
      - { label: "Architecture", value: "Architecture", color: "hsl(64, 95%, 90%)"}
      - { label: "Bank", value: "Bank", color: "hsl(236, 95%, 90%)"}
      - { label: "Duty", value: "Duty", color: "hsl(312, 95%, 90%)"}
      - { label: "Platform", value: "Platform", color: "hsl(139, 95%, 90%)"}
      - { label: "Bac", value: "Bac", color: "hsl(346, 95%, 90%)"}
      - { label: "QA", value: "QA", color: "hsl(283, 95%, 90%)"}
      - { label: "Product", value: "Product", color: "hsl(228, 95%, 90%)"}
      - { label: "Product development", value: "Product development", color: "hsl(85, 95%, 90%)"}
      - { label: "iOS", value: "iOS", color: "hsl(72, 95%, 90%)"}
      - { label: "C-level", value: "C-level", color: "hsl(218, 95%, 90%)"}
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
  source_data: current_folder
  source_form_result: 
  source_destination_path: /
  row_templates_folder: /
  current_row_template: templates/peoples.md
  pagination_size: 100
  font_size: 16
  enable_js_formulas: false
  formula_folder_path: /
  inline_default: false
  inline_new_position: last_field
  date_format: yyyy-MM-dd
  datetime_format: "yyyy-MM-dd HH:mm:ss"
  metadata_date_format: "yyyy-MM-dd HH:mm:ss"
  enable_footer: false
  implementation: default
filters:
  enabled: false
  conditions:
```