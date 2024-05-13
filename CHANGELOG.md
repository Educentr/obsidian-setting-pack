# Changelog

## [0.0.2](https://github.com/Nikolo/obsidian-setting-pack/releases/tag/v0.0.2) (2024-05-13)

[Full Changelog](https://github.com/Nikolo/obsidian-setting-pack/compare/v0.0.1...v0.0.2)

Moved from due date to schedule data

Migrate halper

```
find ./ -not -regex '.*\.obsidian.*' -name '*.md' -exec sed -i -e "s/due/scheduled/" {} \;
```

## Initial Release [0.0.1](https://github.com/Nikolo/obsidian-setting-pack/releases/tag/v0.0.1) (2024-05-13)