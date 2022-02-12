## 사용법

### /etc/init.d/start-sannim

```
#!/bin/bash
### BEGIN INIT INFO
# Provides:          start-sannim
# Required-Start:    $network
# Required-Stop:     $network
# Default-Start:     1 2 3 4 5 6
# Default-Stop:      0 1 6
# Short-Description: your description here
### END INIT INFO

case "$1" in
    start)
        npm --prefix /⏳경로입력/telegrammer run start boot
        ;;
    stop)
        npm --prefix /⏳경로입력/telegrammer run start shutdown
        ;;
esac

exit 0
```

```
cd /etc/init.d
update-rc.d start-sannim defaults
update-rc.d -f start-sannim remove -> 실패 시
systemctl enable start-sannim -> 레벨 변경할 때마다 입력해줘야
```

### [참고: 우분투 자동 시작 프로그램 생성하기(/etc/init.d)](https://fmyson.tistory.com/355)
