---
layout: article
title: Tiny bash script to kill a process by name
---
# {{ page.title }}

store the following code to `killProc.sh` 

```bash
#!/bin/sh
if [ $# -ne 0  ]; then
  ps aux | grep $1 | awk '{print $2}' | xargs kill -9
else
  echo "Usage: \"sh killProc.sh\" ProcessName";
fi
```

and run `sh killProc node` to kill 1 process that contains the name `node`

--

{{ page.date | date_to_string }}
