const ORACLE_OPS_ADDITIONS = {
  "Linux": [
    ["שרת Linux מציג load average גבוה אך CPU כמעט פנוי. איך תחקור?", "אתחיל ב-impact ובזמן ההתחלה, אשווה load למספר ה-CPU ואבדוק process states. Load כולל גם D-state, לכן אחפש I/O wait, storage או NFS תקועים ו-lock contention בעזרת vmstat, iostat, pidstat, dmesg ו-journal. אבחר mitigation הפיך, ואז אוסיף baseline והתראה על saturation."],
    ["זיכרון production ממשיך לעלות עד שה-OOM killer מופעל. מה תעשה?", "אזהה ב-journalctl או dmesg מי נהרג, ואשווה RSS, page cache, swap ו-cgroup limits כדי להבדיל leak מ-cache תקין. אם ה-impact גדל אגביל traffic, אוסיף capacity זמנית או restart מבוקר. אחר כך אתקן leak/limits ואוסיף alerts על working set, swap ו-OOM."],
    ["היישום מקבל No space left on device, אבל df -h מראה מקום פנוי. מה תבדוק?", "אבדוק df -i, את ה-filesystem והמ mount הנכונים, quotas ו-reserved blocks, וגם deleted-open files עם lsof +L1. לפני מחיקה אזהה owner ו-blast radius. אחרי mitigation אטפל ב-log rotation, retention והתראות על bytes וגם inodes."],
    ["שירות שהיה תקין לא עולה אחרי reboot. עבור על האבחון.", "אבדוק systemctl status/is-enabled ואת journalctl -u ב-boot הנוכחי. אשווה ordering ותלויות, mounts, network-online, secrets, permissions ומשתני סביבה. לא אסתפק בהרצה ידנית כי context של systemd שונה; אחרי תיקון אבצע health check ו-reboot test מבוקר."],
    ["CPU בשרת הגיע ל-100% מיד אחרי שינוי. איך תגיב בלי להחמיר?", "אקשר לזמן ולשינוי, אפריד user/system/iowait/steal ואזהה processes ו-threads מובילים. אבחן traffic, loops, GC, interrupts או host contention. אם rollback בטוח אבצע אותו או אפחית traffic, במקום kill/reboot אקראי, ואאמת recovery מול latency ו-errors."],
    ["Application אינו יכול לכתוב לספרייה למרות שיש disk space. מה תבדוק?", "אבדוק את זהות המשתמש, permissions לכל רכיב ב-path, owner/group, ACL, read-only mount, SELinux/AppArmor, quota ו-inodes. אשווה shell מול context של systemd/container. לא אשתמש ב-chmod 777; אתקן הרשאה מינימלית ואבדוק כתיבה בזהות השירות."],
    ["איך היית מתכנן patching עקבי לצי Linux גדול?", "אחזיק inventory ו-baseline, אמיין CVEs לפי exploitability וחשיפה ואבדוק reboot/dependencies. rollout יהיה canary ואז batches עם capacity, backup ו-rollback. automation תהיה idempotent ומתועדת; post-checks יאמתו version ו-health, וחריגים יקבלו owner ותאריך."]
  ],
  "Networking": [
    ["השירות עובד ב-localhost אך משתמשים מרוחקים לא מתחברים. איך תחקור שכבה-אחר-שכבה?", "אבדוק listener עם ss -lntp ועל interface נכון, ואז curl מקומי ומ-host אחר. אעבור ל-host firewall, security rules, route/NAT, load balancer ו-DNS/TLS. timeout מרמז לרוב על drop/path ו-refusal על host reachable בלי listener. אתקן בשכבה שהוכחה ואאמת מבחוץ."],
    ["IP עובד אבל hostname לא. איך תבודד DNS failure?", "אבדוק dig מול resolver מוגדר, record type, authoritative answer, TTL, search domain ו-resolv.conf. אשווה resolver מקומי וציבורי ואבדוק split DNS ו-cache. לא אשתמש ב-hosts כפתרון קבוע; אחרי תיקון אאמת גם TLS ו-Host header."],
    ["שרת אחד מגיע ל-service ושרת אחר באותו environment לא. איך תאתר את ההבדל?", "אשווה source subnet, route/default gateway, DNS, firewall/security groups, proxy, MTU ו-network namespace. אריץ dig, ip route get, nc/curl ו-traceroute משניהם. difference-driven debugging מצמצם השערות; בסוף אחזיר drift ל-source of truth."],
    ["יש latency רשת לסירוגין בלי packet loss ברור. כיצד תחקור?", "אפלח לפי זמן, יעד, AZ ולקוחות ואבדיל DNS, connect, TLS ו-server time בעזרת curl timings ו-traces. אבדוק retransmits, interface drops, saturation, conntrack, load balancer ומסלולים משתנים; ping לבדו אינו מספיק. אאסוף סדרת מדידות לפני שינוי."],
    ["Load balancer מסמן backend כ-unhealthy, אך curl ישיר מצליח. מה תבדוק?", "אבדוק health-check protocol, path, port, Host header, expected code, timeout ו-source rules. אבדוק listen interface ותגובה איטית, redirect, auth או dependency failure. לא אשבית health checks; אתקן contract או policy ואאמת health וגם traffic אמיתי."]
  ],
  "Storage & Virtualization": [
    ["מה ההבדל בין block, file ו-object storage, ומתי תבחר בכל אחד?", "Block מציג volume ל-OS ומתאים ל-filesystem ול-database. File מספק namespace משותף כמו NFS/SMB. Object נגיש דרך API ומתאים ל-data durable וגדול, לא ל-POSIX disk. הבחירה תלויה access pattern, sharing, latency, consistency, scale ועלות."],
    ["VM איטית למרות CPU וזיכרון תקינים. איך תבדוק storage bottleneck?", "אבדוק application latency ואז iostat: await, queue depth, utilization, throughput ו-IOPS. אשווה ל-baseline ול-volume limits ואבדוק host/datastore contention, throttling ו-noisy neighbors. אחרי שינוי tier, shaping או host אאמת שיפור end-to-end."],
    ["Volume של production filesystem כמעט מלא. כיצד תרחיב אותו בבטחה?", "אזהה volume, partition/LVM ו-filesystem ואת יכולת online growth. אבדוק backup ו-limits, אגדיל block device ואז partition/PV-LV ולבסוף filesystem. אאמת df, mount ו-application writes. ההרחבה היא mitigation; עדיין צריך לתקן growth source ו-retention."],
    ["Backup jobs ירוקים חודשים, אבל restore מעולם לא נבדק. מה הסיכון?", "Backup שאינו ניתן לשחזור אינו control מוכח. אגדיר RPO/RTO ואריץ restores לסביבה מבודדת, כולל integrity, keys, permissions, application startup ותלויות. אמדוד זמן שחזור, אגן על עותקים מפני מחיקה ואעדכן runbook מהתרגיל."],
    ["Storage משותף נהיה unavailable. איך תנהל impact וחקירה?", "אמפה services ו-mounts תלויים והאם clients תקועים ב-D-state. אמנע reboot המוני או forced unmount שמסכנים data, ואבדוק network, storage health/quorum, exports, credentials ושינויים עם ה-owner/vendor. אפעיל failover מוכח ואחרי recovery אבדוק integrity ו-backlog."],
    ["הסבר IOPS, throughput ו-latency באמצעות שני workloads.", "IOPS הוא פעולות לשנייה, throughput הוא bytes לשנייה ו-latency הוא זמן לפעולה. Database עם random 8KB I/O עשוי להיות IOPS/latency-sensitive, בעוד backup sequential גדול עשוי להיות throughput-bound. queue depth וגודל I/O קושרים בין המדדים."],
    ["מהו hypervisor ומה ההבדל בין host, VM, guest OS ו-vCPU?", "Hypervisor מחלק host פיזי ל-VMs. Guest OS רואה virtual hardware; vCPU הוא זמן מתוזמן על cores ולא בהכרח core ייעודי. overcommit משפר utilization אך עלול לגרום CPU ready/steal, ballooning או swapping, ולכן בודקים guest וגם host."],
    ["בתוך VM הכול נראה תקין, אך האפליקציה איטית בשעות עומס. מה תבדוק ב-host?", "אבדוק CPU ready/steal, memory ballooning או host swapping, datastore latency, virtual switch drops ו-noisy neighbors. אשווה VMs על אותו host/datastore לחלון הבעיה. migration יכול להיות mitigation; לטווח ארוך אתקן overcommit, reservations ו-alerting."]
  ],
  "Infrastructure as Code": [
    ["למה declarative IaC ו-idempotency חשובים לתפעול production?", "Declarative code מתאר desired state ו-idempotency מאפשרת convergence חוזר בלי שינוי נוסף כשהיעד נכון. עם version control, review ו-plan מתקבלים repeatability, audit ו-recovery. עדיין בודקים stale state, destructive plans ופעולות שאינן באמת idempotent."],
    ["מישהו שינה resource ידנית ו-Terraform plan מציג drift. מה תעשה?", "אברר אם זה emergency mitigation תקף ואבדוק impact. אבחר במפורש לקודד את השינוי, לייבא/לעדכן state, או להחזיר ל-desired state; לא אריץ apply עיוור. אחר כך אחזק write controls, break-glass audit ו-drift detection."],
    ["אילו סיכוני secrets קיימים ב-Terraform variables, outputs ו-state?", "Sensitive מסתיר output אך אינו מצפין state. secrets עלולים להופיע בקוד, tfvars, plans, CI logs ו-state. אשתמש ב-secret manager, credentials קצרי חיים ו-remote state מוצפן עם least privilege. במקרה דליפה אסובב secret ואבדוק audit."]
  ],
  "Cloud / AWS": [
    ["מפה מושגים מרכזיים בין AWS ל-OCI בלי להניח שהם זהים.", "EC2 מקביל רעיונית ל-OCI Compute, VPC ל-VCN, EBS ל-Block Volumes ו-S3 ל-Object Storage. AZ דומה ל-Availability Domain/Failure Domain אך topology שונה, וגם IAM שונה. מעבירים עקרונות subnet, route, policy ו-failure isolation ובודקים semantics לפני implementation."],
    ["איך היית מתכנן workload זמין בענן מול failure domains?", "אמפה כל רכיב ל-AD/AZ ול-fault domain, אסיר SPOFs ואפזר replicas מאחורי load balancer. data layer צריך replication ו-failover שתואמים consistency, RPO ו-RTO. אבדוק quotas, capacity, DNS ותלויות ואבצע failure exercise."],
    ["Security rule בענן נראית פתוחה, אך instance לא reachable. מה תבדוק?", "אעבור על direction/source/destination, subnet route, public/private IP, internet/NAT gateway, ACL/security lists, host firewall וה-listener. אבדוק return path ו-asymmetric routing ואשתמש ב-flow logs. לא אפתח 0.0.0.0/0 כבדיקה."],
    ["מתי scaling אנכי לעומת אופקי, ומה יכול למנוע scale-out מוצלח?", "אנכי פשוט יותר אך מוגבל ולעיתים דורש restart; אופקי מוסיף replicas ומשפר resilience אם השירות stateless. startup איטי, quota, subnet IPs, state מקומי, DB bottleneck או metric מאוחר יכולים לחסום scale-out. אגדיר headroom ואבצע load test."]
  ],
  "Enterprise Infra": [
    ["Production latency עולה בהדרגה בלי deployment. איך תבנה חקירה?", "אאשר impact ואשווה baseline לפי service, region, node ולקוח. אחפש traffic, dependency latency, saturation, scheduled jobs, DNS/certificate או maintenance. אבנה timeline ממטריקות, logs ו-traces ואבדוק hypothesis אחד בכל פעם. אחרי recovery אעדכן capacity model והתראות trend."],
    ["רק חלק מהלקוחות נפגעים. כיצד תצמצם blast radius?", "אפלח לפי tenant, geography, ISP, request type, version, node/AZ וזמן. אשווה affected מול control ואמפה routing, shard, flag ותלויות. containment יכול להיות הסרת node, routing או disable flag. אאמת recovery של הקבוצה הנפגעת—not רק aggregate."],
    ["Node אחד מתנהג אחרת משאר ה-fleet. מה תעשה?", "אוציא אותו מ-traffic אם יש impact, אשמור evidence ואשווה image, config/package hash, uptime, host, mounts, routes, limits ו-logs מול node תקין. אם immutable replacement בטוח אעדיף אותו, ואז אחזק drift detection ו-fleet consistency."],
    ["איך תבצע capacity management לפני שהמערכת מגיעה לרוויה?", "אמדוד demand, utilization, saturation ו-user latency לאורך זמן וב-peaks. אקשר capacity ל-growth, seasonality, lead time ו-failure headroom. אגדיר forecast עם owner ותאריך ואאמת scaling/load-shedding ב-load test, כולל dependencies, quotas ו-storage."],
    ["Critical security hotfix חייב להיפרס במהירות. איך מאזנים מהירות וסיכון?", "אאמת exposure ואת הנכסים, אבנה test מינימלי ו-rollback/replace plan. אפרוס canary ואז batches עם monitoring, stop conditions ו-capacity; emergency process עדיין מתועד. אם patch מתעכב איישם compensating control, ובסוף אאמת version, health וכיסוי."]
  ],
  "Incident Response": [
    ["אתה מצטרף ל-incident bridge עם 15 אנשים שמדברים יחד. מה תעשה?", "אאשר incident commander, אסכם impact, severity, facts והיעד המיידי: restoration. אפצל workstreams עם owner, hypothesis וזמן חזרה, אמנה scribe ו-communications ואעצור speculation ושינויים לא מתואמים. עדכונים והחלטות יהיו בקצב קבוע."],
    ["Production למטה ויש שלוש סיבות סבירות. איך תארגן investigation?", "אדרג hypotheses לפי evidence ויכולת להסביר impact. לכל workstream יהיה owner, בדיקה בטוחה, expected observation ו-deadline; timeline וראיות יהיו משותפים. במקביל אבחן mitigation בטוח. ה-IC מסנכרן ואינו מבצע לבדו את כל ה-debugging."],
    ["Workaround החזיר שירות אך root cause אינו ידוע. מה עכשיו?", "אאמת recovery מול user metrics, אתעד את ה-workaround וה-risk ואחליט אם אפשר להוריד severity עם monitoring. לא אכריז solved: אשמר evidence, אפתח RCA עם owner וזמן ואגדיר removal/hardening. העדכון יבדיל restored מ-root cause confirmed."],
    ["Management מבקש עדכון בזמן שהמהנדסים חוקרים. מה ייכלל?", "אשלח impact, start time/severity, facts, mitigation ותוצאה, workstreams, risks וזמן העדכון הבא. לא אציג hypothesis כ-root cause ולא אעמיס command output. communications owner נפרד מאפשר למהנדסים להמשיך לעבוד."],
    ["שני צוותים מתווכחים מי הבעלים של התקלה. איך תתקדם?", "בזמן incident ownership אינו תנאי לחקירה: ה-IC יחלק בדיקות לפי expertise וגישה וישתמש ב-evidence וב-interface contracts. אסלים כשחסרה סמכות או תגובה—not כדי להכריע אשמה. ownership קבוע יטופל ב-postmortem."],
    ["Reboot כנראה יחזיר שירות אך ימחק evidence. איך מחליטים?", "אשווה customer impact לערך הראיות ולסיכון reboot. אאסוף מהר metrics, logs, process/socket state, changes ו-core, ואבדוק failover או reboot של node יחיד. אם impact חמור אבחר restoration אחרי minimum evidence, אתעד ואמשיך RCA ממקורות מרכזיים."]
  ],
  "Security": [
    ["מהם כללי הבטיחות לפני פקודת troubleshooting ב-production?", "אבדוק identity, target, scope, read-only alternative ו-blast radius. אעדיף query, dry-run ופעולה הפיכה; שינוי רחב יקבל peer check ו-record. לא אדביק secrets ללוג או לצ'אט. לאחר הפעולה אאמת תוצאה ואשמור audit."],
    ["נמצאה vulnerability קריטית אך אין patch תואם. מה תעשה?", "אאמת exploitability, exposure ונכסים מושפעים. איישם compensating controls כמו isolation, WAF rule, disable feature או access reduction עם monitoring. אבדוק upgrade path ואקבע exception מתועד עם owner ותאריך—not קבלה פתוחה של הסיכון."]
  ]
};

Object.entries(ORACLE_OPS_ADDITIONS).forEach(([subject, rows]) => {
  const items = rows.map(([q, a]) => ({
    q,
    a,
    signals: [
      "Starts with customer impact and evidence",
      "Uses a structured, layer-by-layer approach",
      "Includes safe mitigation, validation, and prevention"
    ]
  }));
  const group = QUESTIONS.find((entry) => entry.subject === subject);
  if (group) group.items.push(...items);
  else QUESTIONS.push({ subject, icon: "SV", items });
});
