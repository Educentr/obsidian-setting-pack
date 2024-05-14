# Changelog

## [0.0.5](https://github.com/Nikolo/obsidian-setting-pack/releases/tag/v0.0.5) (2024-05-14)  

Fix block news

Migration halper

```bash
find ./MeetingNotes/121/ -not -regex '.*\.obsidian.*' -name '*.md' -exec sed -i -e 's/"# Tasks done from:/"## Tasks done from:/' {} \;
```

## [0.0.4](https://github.com/Nikolo/obsidian-setting-pack/releases/tag/v0.0.4) (2024-05-14) 

Migration halper (v0.0.3) for BSD-like systems.

```bash
find ./MeetingNotes/121/ -not -regex '.*\.obsidian.*' -name '*.md' -exec perl -e 'open($in, "<", $ARGV[0])||die $!; $_=join("", <$in>);close($in); s/and \(\s+contains\(join\(people\), "` \+ name \+ `"\)\s+or contains\(meta\(section\).subpath, "` \+ name \+ `"\)\s+\)\s+//s; s/console\.log\(tsks\);\s+//s; open($out, ">", $AR
GV[0])||die $!; printf $out $_; close($out)' {} \;
```

## [0.0.3](https://github.com/Nikolo/obsidian-setting-pack/releases/tag/v0.0.3) (2024-05-14) 

Fix block news in 121 template

Migrate helper
```bash
find ./MeetingNotes/121/ -not -regex '.*\.obsidian.*' -name '*.md' -exec sed -z -i -e 's/and (\s\+contains(join(people), "` + 
name + `")\s\+or contains(meta(section).subpath, "` + name + `")\s\+)\s\+//' {} \;
```

## [0.0.2](https://github.com/Nikolo/obsidian-setting-pack/releases/tag/v0.0.2) (2024-05-13)

[Full Changelog](https://github.com/Nikolo/obsidian-setting-pack/compare/v0.0.1...v0.0.2)

Moved from due date to schedule data

Migrate helper

```bash
find ./ -not -regex '.*\.obsidian.*' -name '*.md' -exec sed -i -e "s/due/scheduled/" {} \;
find ./ -not -regex '.*\.obsidian.*' -name '*.md' -exec sed -i -e "s/📅/⏳/" {} \;
```

## Initial Release [0.0.1](https://github.com/Nikolo/obsidian-setting-pack/releases/tag/v0.0.1) (2024-05-13)