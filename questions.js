const QUESTIONS = [
  {
    "subject": "General DevOps",
    "icon": "DV",
    "items": [
      {
        "q": "מה ההבדל בין Build ל-Packaging?",
        "a": "Build הוא השלב שבו הופכים קוד מקור לארטיפקט מוכן לריצה - לדוגמה קומפילציה של קבצי .java לקבצי .class ואז ל-jar, או build של React שמייצר HTML/CSS/JS. Packaging הוא השלב שבו אורזים את הארטיפקט לפורמט הפצה - למשל בניית Docker image והעלאתו ל-ECR. בקיצור: Build יוצר את התוכנה, Packaging אורז אותה לפריסה.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה זה DevOps?",
        "a": "DevOps היא גישה תרבותית ותהליכית שמחברת בין פיתוח לתפעול במטרה לשפר שיתוף פעולה, אוטומציה, אמינות ומהירות שחרור. הרעיון הוא שקוד יעבור מכתיבתו ועד לפרודקשן באופן אוטומטי, עקבי ומהיר, באמצעות CI/CD, IaC, ניטור ותרבות של שיפור מתמיד.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה זה SaaS?",
        "a": "SaaS הוא Software as a Service - תוכנה שמסופקת למשתמש כשירות דרך האינטרנט. במקום להתקין מקומית, ניגשים אליה דרך הדפדפן או API (כמו Gmail). הספק מנהל את התשתית, העדכונים, האחסון והאבטחה, והמשתמש לא מתקין דבר.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה זה Infrastructure as Code?",
        "a": "IaC היא שיטה לניהול תשתיות באמצעות קוד. במקום להקים שרתים ומשאבים ידנית דרך ממשק גרפי, כותבים קבצים שמגדירים את כל התשתית - שרתים, רשת, Load Balancers, DB ועוד. כלים נפוצים: Terraform, CloudFormation, Ansible. היתרון: יכולת לשחזר סביבות, versioning ו-CI/CD גם על תשתיות.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהם קבצי WAR ו-JAR ומה ההבדל ביניהם?",
        "a": "JAR (Java Archive) הוא קובץ ZIP שמאגד קבצי class ותלויות של אפליקציית Java או ספרייה. WAR (Web Application Archive) הוא ארכיון לאפליקציות Web המכיל classes, JSP, HTML וקונפיגורציות, ומיועד לרוץ בתוך Web container כמו Tomcat. ההבדל: JAR לאפליקציות עצמאיות וספריות, WAR לאפליקציות Web.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "האם זמן הריצה של Python שונה מזה של C, ולמה?",
        "a": "כן. Python היא שפה מתורגמת (interpreted) - כל שורה מתורגמת לקוד מכונה בזמן הריצה ולכן רצה לאט יחסית. C היא שפה מקומפלת (compiled) - הקוד מתורגם מראש לקוד מכונה ורץ ישירות, ולכן הרבה יותר מהר. ככלל, ככל ששפה קרובה יותר לשפת מכונה כך היא מהירה יותר אך פחות נוחה לפיתוח.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה זה GitOps?",
        "a": "GitOps הוא מודל עבודה שבו Git הוא ה-Source of Truth היחיד גם לקוד וגם לתשתיות. כל שינוי - קונפיגורציה, פריסה או תשתית - חייב לעבור דרך Git. כלי כמו ArgoCD או Flux מסנכרן את המצב בקלאסטר עם מה שכתוב ב-repo. מאפשר עקביות, היסטוריה מלאה, audit ו-rollback פשוט.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה ההבדל בין Interpreter ל-Compiler?",
        "a": "Interpreter מריץ קוד שורה-שורה בזמן ריצה - נוח לדיבוג כי שגיאות מופיעות מיד, אבל איטי יותר. שפות כמו Python ו-Bash משתמשות ב-Interpreter. Compiler מתרגם את כל הקוד מראש לקובץ בינארי שלם - מהיר מאוד בריצה אבל דורש שלב build. שפות כמו C++ ו-Go משתמשות ב-Compiler.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "איך לדעתך צריכה להיראות סביבת Staging?",
        "a": "סביבת Staging צריכה להיות כמה שיותר דומה לפרודקשן, אבל בסקייל קטן יותר - אותם שירותים, אותה ארכיטקטורה, אותם סוגי משאבים, רק עם פחות nodes/replicas. המטרה היא לזהות בעיות לפני פרודקשן בלי לבזבז משאבים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "המפתחים יוצאים לחופש - מה עושים עם סביבת הפיתוח והטסטים?",
        "a": "כותבים אוטומציה (סקריפט, Lambda או CronJob) שמורידה את כל המשאבים בסוף יום העבודה ומעלה אותם בבוקר, או שמכבה את הסביבה לאורך החופש. אין סיבה לבזבז משאבי ענן בזמן שאף אחד לא משתמש.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "איך היית מסביר platform engineering לעומת DevOps קלאסי?",
        "a": "Platform engineering בונה paved roads: services, workflows, templates ו-guardrails שאפשר לעשות בהם reuse, כדי שצוותי product יוכלו לשחרר בצורה בטוחה בלי לפתוח ticket על כל שינוי infrastructure. DevOps קלאסי הוא תרבות וסט practices רחב יותר; platform engineering הוא דרך מעשית לעשות לזה scale.",
        "signals": [
          "Differentiates culture from internal platform product",
          "Mentions self-service and guardrails",
          "Connects to developer experience and reliability"
        ]
      },
      {
        "q": "מה מבדיל Senior DevOps Engineer ממהנדס mid-level?",
        "a": "Senior engineer מוריד סיכון מערכתי, יוצר patterns שחוזרים על עצמם, מוביל למידה מ-incidents, מנטור לאחרים ומציג tradeoffs בצורה ברורה. הוא נמדד פחות לפי היכרות עם כלי ספציפי ויותר לפי היכולת לתכנן delivery systems אמינים ולשפר execution של צוותים.",
        "signals": [
          "Talks about leverage and ownership",
          "Mentions tradeoffs, mentoring, and risk",
          "Avoids just listing tools"
        ]
      }
    ]
  },
  {
    "subject": "Linux",
    "icon": "LX",
    "items": [
      {
        "q": "מה ההבדל בין פקודות mv ו-cp ב-Linux?",
        "a": "הפקודה cp משמשת להעתקת קבצים או תיקיות ממקום אחד לאחר. הפקודה mv משמשת להעברת קבצים או תיקיות ממקום אחד לאחר, או לשינוי שמם. כלומר, cp יוצר עותק חדש ומשאיר את המקור, בעוד mv מעביר את המקור למיקום חדש או משנה את שמו.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "כיצד תשתמש בפקודה chmod כדי להעניק הרשאות קריאה, כתיבה והרצה לבעלים של קובץ?",
        "a": "כדי להעניק הרשאות קריאה, כתיבה והרצה לבעלים של קובץ, אשתמש בפקודה chmod 700 filename. הספרה 7 מייצגת את סכום ההרשאות: 4 לקריאה, 2 לכתיבה ו-1 להרצה. אפס בשאר הרשאות מונע הרשאות לאחרים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו תפקיד ה-PID בפקודות כמו ps ו-kill?",
        "a": "ה-PID הוא Process ID, מזהה ייחודי לכל תהליך שרץ במערכת ה-Linux. הפקודה ps מציגה את רשימת התהליכים יחד עם ה-PID שלהם, ואילו הפקודה kill משתמשת ב-PID כדי לשלוח אותות לתהליכים, למשל כדי לסיים אותם.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את עקרון הפעולה של systemd ומהן יתרונותיו על פני init scripts מסורתיים.",
        "a": "systemd היא מערכת אתחול (init system) ומנהל שירותים שמשמשת לאתחול המערכת וניהול שירותים. יתרונותיה כוללים אתחול מהיר יותר באמצעות הפעלה מקבילית של שירותים, ניהול תלויות מובנה בין שירותים, וממשק אחיד לניהול שירותים באמצעות יחידות (units). הוא גם מספק יכולות ניהול לוגים משופרות דרך journalctl.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "כיצד תשתמש ב-journalctl כדי לצפות בלוגים של שירות ספציפי?",
        "a": "כדי לצפות בלוגים של שירות ספציפי, אשתמש בפקודה journalctl -u servicename. זה יציג את כל הלוגים הקשורים לאותו שירות. ניתן להוסיף דגלים נוספים כמו -f למעקב בזמן אמת, או -since ו-until לסינון לפי טווח זמנים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר מהי מטרת הפקודה ss ומהם יתרונותיה על פני netstat.",
        "a": "הפקודה ss (socket statistics) משמשת להצגת מידע מפורט על סוקטים פתוחים (חיבורי רשת). היא מהירה ויעילה יותר מ-netstat, במיוחד במערכות עמוסות עם אלפי חיבורים. ss מספקת מידע עשיר יותר על מצב החיבורים, פרוטוקולים, ותכונות מתקדמות של הרשת.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו ההבדל בין hard link ל-soft link (symlink) ב-Linux?",
        "a": "hard link הוא הפניה ישירה לאותו בלוק נתונים על הדיסק כמו הקובץ המקורי, וכאשר אחד מהם נמחק, הנתונים נשארים זמינים דרך השני. soft link (או symlink) הוא קובץ נפרד שמכיל נתיב לקובץ אחר; אם הקובץ המקורי נמחק, ה-soft link נשבר והופך ללא תקף.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "כיצד תגדיר משימה שתרוץ אוטומטית כל יום ראשון בשעה 03:00 באמצעות cron?",
        "a": "כדי להגדיר משימה שתרוץ כל יום ראשון בשעה 03:00 באמצעות cron, אערוך את קובץ ה-crontab באמצעות הפקודה crontab -e. לאחר מכן, אוסיף את השורה הבאה: 0 3 * * 0 /path/to/your/script.sh. זה אומר: דקה 0, שעה 3, כל יום בחודש, כל חודש, ויום ראשון (0).",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את מטרת המשתנה PATH וכיצד הוא משפיע על ביצוע פקודות במעטפת.",
        "a": "המשתנה PATH הוא משתנה סביבה שמכיל רשימה של תיקיות שהמעטפת סורקת כאשר מנסים לבצע פקודה. כאשר אתה מקליד פקודה, המערכת מחפשת את קובץ ההרצה של הפקודה בתיקיות המוגדרות ב-PATH. זה מאפשר להריץ פקודות מבלי לציין את הנתיב המלא אליהן.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "תאר את תהליך ההתחברות לשרת מרוחק באמצעות SSH, וציין יתרון אבטחתי אחד של SSH.",
        "a": "תהליך ההתחברות לשרת מרוחק באמצעות SSH כולל הרצת הפקודה ssh user@hostname, ולאחר מכן אימות (בדרך כלל באמצעות סיסמה או מפתח SSH). יתרון אבטחתי מרכזי של SSH הוא שכל התקשורת בין הלקוח לשרת מוצפנת, מה שמגן מפני האזנות ויירוט נתונים רגישים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "כיצד תשתמש בפקודה find כדי לאתר את כל הקבצים ששונו ב-24 השעות האחרונות בספרייה מסוימת ובספריות המשנה שלה?",
        "a": "הפקודה find מאפשרת חיפוש קבצים וספריות לפי קריטריונים מגוונים. כדי למצוא קבצים ששונו ב-24 השעות האחרונות, נשתמש באפשרות -mtime. לדוגמה, find /path/to/directory -mtime -1 יציג את כל הקבצים ששונו ביום האחרון (פחות מ-24 שעות). זוהי דרך יעילה לזהות קבצים שעודכנו לאחרונה ולבצע עליהם פעולות נוספות.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו umask וכיצד הוא משפיע על הרשאות ברירת המחדל של קבצים ותיקיות חדשים שנוצרים?",
        "a": "umask הוא ערך מספרי שקובע אילו הרשאות יילקחו (יחוסרו) מהרשאות ברירת המחדל של קבצים ותיקיות חדשים. עבור קבצים, הרשאות ברירת המחדל הן 666 (rw-rw-rw-), ועבור תיקיות 777 (rwxrwxrwx). לדוגמה, אם ה-umask הוא 0022, קובץ חדש יקבל הרשאות 644 (rw-r--r--) ותיקייה תקבל 755 (rwxr-xr-x). הבנת umask חיונית לשמירה על עקביות אבטחת מידע וניהול הרשאות במערכת.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את ההבדל בין הרצת תהליך ברקע (background) לבין הרצת תהליך בחזית (foreground) וכיצד ניתן להעביר תהליך בין המצבים.",
        "a": "תהליך ברקע רץ באופן עצמאי ומאפשר למשתמש להמשיך להשתמש בטרמינל, ואילו תהליך בחזית דורש את הטרמינל ומונע פעולות נוספות. כדי להריץ תהליך ברקע, נוסיף & בסוף הפקודה. כדי להעביר תהליך מחזית לרקע, נקיש Ctrl+Z כדי להשהות אותו, ולאחר מכן נשתמש בפקודה bg. כדי להחזיר תהליך מרקע לחזית, נשתמש בפקודה fg. זוהי טכניקה חיונית לניהול משאבי מערכת ולטעינת עבודה יעילה.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "כיצד תשתמש בפקודה nice כדי לשנות את עדיפות הביצוע של תהליך קיים או חדש?",
        "a": "הפקודה nice משמשת לשינוי ערך העדיפות (niceness) של תהליך, המשפיע על מידת הקצאת משאבי CPU. ערכי niceness נעים בין -20 (עדיפות גבוהה) ל-19 (עדיפות נמוכה). כדי להריץ תהליך חדש עם עדיפות מסוימת, נשתמש ב-nice -n VALUE command. כדי לשנות עדיפות של תהליך קיים, נשתמש ב-renice -n VALUE -p PID. שימוש נכון ב-nice מאפשר לתעדף תהליכים קריטיים ולהבטיח שתהליכים פחות חשובים לא יצרכו יותר מדי משאבי מערכת.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את המבנה של קובץ systemd unit file (לדוגמה, Service Unit) ומהם הסקשנים (",
        "a": "קובץ systemd unit file מגדיר שירות, תיקייה, התקן, או כל ישות אחרת שמנוהלת על ידי systemd. קבצי Service Unit כוללים בדרך כלל שלושה סקשנים עיקריים: [Unit] המכיל מטא-נתונים ותלויות, [Service] המגדיר את אופן הרצת התהליך (פקודות, משתנים סביבה, משתמש הרצה), ו- [Install] הקובע מתי השירות יופעל אוטומטית (לדוגמה, עם עליית המערכת). הבנה של מבנה זה חיונית לכתיבה וניהול של שירותים מותאמים אישית במערכות Linux מתקדמות.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "כיצד תנתח לוגים של שירות ספציפי באמצעות journalctl ותסנן אותם לפי יחידת זמן?",
        "a": "journalctl היא כלי מרכזי לניתוח לוגים ב-systemd. כדי לצפות בלוגים של שירות ספציפי, נשתמש ב-journalctl -u service_name. כדי לסנן את הלוגים לפי יחידת זמן, נוסיף אפשרויות כמו --since ו- --until. לדוגמה, journalctl -u httpd --since",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "כיצד תבצע איתור ופתרון תקלה במצב שבו שרת לינוקס איטי באופן חריג, ומהן הפקודות העיקריות והמטריקות שיש לבדוק?",
        "a": "במצב של שרת איטי, אתחיל בבדיקת ניצול משאבים באמצעות top או htop כדי לזהות תהליכים שצורכים CPU או זיכרון בצורה חריגה. לאחר מכן, אבדוק את ניצול הדיסק באמצעות iostat או iotop ואת עומס הרשת עם iftop או ss. אם הבעיה עדיין לא ברורה, אנתח לוגים של המערכת (לדוגמה, /var/log/syslog או journalctl) כדי למצוא שגיאות או התראות חריגות. לבסוף, אשקול לבדוק את הגדרות ה-kernel באמצעות sysctl ואת ה-runlevel הנוכחי כדי לוודא שאין שירותים מיותרים שרצים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את עקרון הפעולה של iptables וכיצד תשתמש בו כדי לחסום תעבורת נכנסת (ingress) מכתובת IP ספציפית בפורט מסוים.",
        "a": "iptables היא כלי לשליטה וחסימת תעבורת רשת במערכות לינוקס, הפועלת כשכבת חומת אש המבוססת על כללים (rules) בטבלאות שונות (לדוגמה, filter, nat). כללי ה-iptables מעבדים חבילות (packets) לפי סדר ההופעה שלהם בשרשרת (chain). כדי לחסום תעבורה נכנסת מכתובת IP ספציפית בפורט מסוים, נשתמש בפקודה iptables -A INPUT -s [כתובת_IP] --dport [פורט] -j DROP. פקודה זו תוסיף כלל לשרשרת INPUT שיחסום את הגישה הנכנסת מכתובת ה-IP המוגדרת לפורט המוגדר.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו תפקידו של ה-inode במערכת קבצים של לינוקס, וכיצד הוא קשור לקישורים קשיחים (hard links)?",
        "a": "ה-inode הוא מבנה נתונים בתוך מערכת הקבצים של לינוקס שמכיל מטא-דאטה על קובץ או ספרייה, כגון הרשאות, בעלות, חתימת זמן (timestamps) ואינדיקטור לבלוקי הנתונים הפיזיים על הדיסק. לכל קובץ ייחודי במערכת קבצים יש inode יחיד. קישורים קשיחים הם שמות נוספים המצביעים על אותו מספר inode, כלומר, מספר שמות קבצים שונים יכולים להצביע על אותה יחידת נתונים פיזית על הדיסק באמצעות אותו inode. כל עוד לפחות קישור קשיח אחד קיים, הנתונים הפיזיים על הדיסק נשמרים, גם אם מוחקים קישורים קשיחים אחרים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "תאר כיצד תשתמש בפקודה lsof כדי לאתר קבצים פתוחים על ידי תהליך ספציפי, או לאתר אילו תהליכים פתחו קובץ מסוים.",
        "a": "הפקודה lsof (list open files) משמשת להצגת רשימת כל הקבצים הפתוחים על ידי תהליכים במערכת. כדי לאתר קבצים פתוחים על ידי תהליך ספציפי, נשתמש ב-lsof -p [PID], כאשר [PID] הוא מזהה התהליך (Process ID) המבוקש. כדי לאתר אילו תהליכים פתחו קובץ מסוים, נשתמש ב-lsof [נתיב_לקובץ], לדוגמה lsof /var/log/syslog. הפקודה תציג את התהליכים הנוכחיים שמשתמשים בקובץ או בספרייה הרצויים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו ה-Shell ולמה הוא משמש ביומיום של איש DevOps?",
        "a": "ה-Shell הוא מפרש פקודות המאפשר למשתמש לתקשר עם מערכת ההפעלה לינוקס באמצעות הקלדת פקודות. הוא משמש ככלי מרכזי עבור אנשי DevOps לביצוע משימות רבות, כגון ניהול קבצים ותיקיות, הרצת סקריפטים, התקנת תוכנות, ניטור תהליכים, ואינטראקציה עם שירותי מערכת. יכולת עבודה יעילה עם ה-Shell חיונית לאוטומציה ותחזוקת מערכות.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "ציין והסבר בקצרה 3 פקודות לינוקס בסיסיות שאתה מכיר.",
        "a": "1. `ls`: פקודה זו מציגה את תוכן התיקייה הנוכחית או תיקייה אחרת שצוינה. 2. `cd`: פקודה זו משנה את התיקייה הנוכחית לתיקייה אחרת. 3. `grep`: פקודה זו מחפשת טקסט מסוים בתוך קבצים או בתוך פלט של פקודות אחרות, ומשמשת לסינון מידע.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו SSH וכיצד הוא משמש לאבטחת תקשורת?",
        "a": "SSH (Secure Shell) הוא פרוטוקול רשת המוביל המאפשר תקשורת מאובטחת בין שני מחשבים ברשת לא מאובטחת. הוא משמש להתחברות מרחוק לשרתים, העברת קבצים וביצוע פקודות. SSH מבטיח אבטחת תקשורת על ידי שימוש בהצפנה חזקה לאימות ולקשר עצמו, ובכך מגן על המידע מפני ציתות ושינויים זדוניים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר מהם Permissions (הרשאות) בקבצי לינוקס וכיצד הם מנוהלים.",
        "a": "Permissions בקבצי לינוקס קובעים מי יכול לגשת לקובץ או לתיקייה ואיזה סוג של פעולות הוא יכול לבצע. ישנם שלושה סוגי הרשאות ראשיים: קריאה (read), כתיבה (write) והרצה (execute), והן ניתנות לשלוש קבוצות: בעל הקובץ (owner), קבוצה (group) ושאר המשתמשים (others). ההרשאות מנוהלות באמצעות פקודות כמו `chmod` לשינוי הרשאות ו-`chown` לשינוי בעלות.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      }
    ]
  },
  {
    "subject": "Networking",
    "icon": "NW",
    "items": [
      {
        "q": "מה עושה הפקודה curl ובאילו מקרים נשתמש בה?",
        "a": "curl היא פקודת CLI להחלפת נתונים בין המחשב לשרת ב-HTTP/S ופרוטוקולים נוספים. ללא flags היא שולחת בקשת GET, אך אפשר לשלוח גם POST/PUT/DELETE, להוסיף headers, body ו-cookies. נפוץ לבדיקת APIs, הורדת קבצים ובדיקה מהירה של זמינות שירות.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה זה API ולמה הוא חשוב?",
        "a": "API (Application Programming Interface) הוא חוזה שמגדיר איך שתי תוכנות יכולות לתקשר ביניהן - אילו בקשות אפשר לשלוח, באיזה פורמט, ואיזו תגובה יחזור. הוא מסתיר את המימוש הפנימי וחושף רק את מה שצריך, כך שאפשר לשנות את הקוד מאחורי הקלעים בלי לשבור לקוחות.\n\nהסוג הנפוץ ביותר הוא REST API מעל HTTP:\n- כל משאב מיוצג ב-URL (למשל /users/123)\n- פעולות מבוצעות עם HTTP methods: GET (קריאה), POST (יצירה), PUT/PATCH (עדכון), DELETE (מחיקה)\n- התגובה כוללת status code (200 הצלחה, 201 נוצר, 400 בקשה לא תקינה, 401 לא מורשה, 404 לא נמצא, 500 שגיאת שרת) ו-body בפורמט JSON\n- Stateless - כל בקשה עומדת בפני עצמה, השרת לא זוכר מצב בין בקשות\n\nאימות נפוץ: API Keys, JWT tokens או OAuth ב-Authorization header.\n\nלמה זה חשוב לדבאופס: כל הכלים שאנחנו עובדים איתם (Kubernetes, AWS, GitHub, Docker, Terraform) פועלים מאחורי הקלעים מול APIs. kubectl למשל הוא בעצם CLI ששולח בקשות ל-Kubernetes API Server. Terraform מדבר עם API של AWS כדי ליצור משאבים. הבנת APIs היא הבסיס לאוטומציה, אינטגרציות בין מערכות, ו-microservices שמדברים ביניהם.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה עושה הפקודה telnet ובמה היא שימושית ב-DevOps?",
        "a": "telnet פותחת חיבור TCP/IP למכונה ולפורט מסוים, ומשמשת בעיקר לבדיקה האם פורט פתוח: התחברות מוצלחת מעידה שהפורט פתוח, ו-Connection refused או timeout מעידים שהוא סגור או חסום ב-firewall. ב-DevOps זה כלי מהיר לאבחון בעיות חיבור לפני שצוללים ל-tools מורכבים יותר.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את ההבדל העיקרי בין TCP ל-UDP ומתי נבחר להשתמש בכל אחד מהם בהקשר של יישומי רשת?",
        "a": "TCP הוא פרוטוקול מבוסס חיבור המבטיח אמינות, סדר ואימות מסירה של חבילות נתונים, מה שהופך אותו למתאים ליישומים הדורשים שלמות נתונים כמו העברת קבצים או גלישה באינטרנט. לעומת זאת, UDP הוא פרוטוקול חסר חיבור ואינו מבטיח אמינות או סדר, אך הוא מהיר ובעל תקורה נמוכה, ומתאים ליישומים בהם מהירות חשובה יותר מאמינות, כמו הזרמת וידאו או משחקי רשת. הבחירה ביניהם תלויה בדרישות הספציפיות של היישום לגבי אמינות וביצועים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה תפקידו של DNS (Domain Name System) וכיצד עובד תהליך רזולוציית שם דומיין לכתובת IP?",
        "a": "DNS מתפקד כמערכת טלפון של האינטרנט, מתרגם שמות דומיין ידידותיים למשתמש (כמו example.com) לכתובות IP מספריות. תהליך הרזולוציה מתחיל כאשר מחשב הלקוח שולח שאילתה לשרת DNS מקומי, אשר בתורו פונה לשרתי שורש, שרתי TLD ושרתים סמכותיים עד למציאת כתובת ה-IP המבוקשת. לאחר מכן, הכתובת נשלחת חזרה ללקוח ונשמרת בזכרון המטמון לשימוש עתידי, מה שמאפשר גישה לאתרים ושירותים ברשת.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את המושגים Load Balancer L4 ו-L7, וציין מקרה שימוש לכל אחד מהם בסביבת DevOps.",
        "a": "Load Balancer L4 פועל בשכבת התעבורה (Transport Layer) של מודל ה-OSI ומסתמך על מידע כמו כתובות IP ופורטים כדי לנתב תעבורה, דוגמה לכך היא חלוקת עומס בין שרתים על בסיס חיבורי TCP/UDP. Load Balancer L7 פועל בשכבת היישום (Application Layer), ומשתמש במידע עשיר יותר כמו כותרות HTTP, כתובות URL או עוגיות כדי לקבל החלטות ניתוב חכמות יותר, כגון ניתוב משתמשים לשירות מסוים על בסיס נתיב בקשה. L4 מתאים לפיזור עומס כללי ובסיסי, בעוד L7 מתאים לפיזור עומס מתקדם יותר עם יכולות כמו SSL offloading ו-content-based routing.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו מודל ה-OSI ומה חשיבותו להבנת עבודת הרשת ב-DevOps?",
        "a": "מודל ה-OSI (Open Systems Interconnection) הוא מודל תיאורטי בן שבע שכבות המתאר כיצד מערכות תקשורת מתקשרות זו עם זו. כל שכבה במודל אחראית על פונקציונליות ספציפית, החל מהשכבה הפיזית ועד שכבת היישום. ההבנה של מודל ה-OSI קריטית ב-DevOps מאפשרת לזהות ולפתור תקלות תקשורת באופן שיטתי, להבין טוב יותר כיצד יישומים ורכיבי תשתית מתקשרים, ולתכנן ארכיטקטורות רשת אמינות ויעילות יותר.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "תאר את תהליך ה-TLS/SSL handshake ומה מטרתו?",
        "a": "תהליך ה-TLS/SSL handshake הוא סדרה של צעדים שבהם שרת ולקוח מאמתים זה את זה ויוצרים ערוץ תקשורת מאובטח ומוצפן. התהליך מתחיל ב-Client Hello ו-Server Hello, בהם הם מחליפים מידע על גרסאות TLS, אלגוריתמים נתמכים ו-random bytes. לאחר מכן, השרת שולח את תעודת ה-SSL שלו לאימות על ידי הלקוח. לבסוף, לאחר שהלקוח מאמת את התעודה, הם מחליפים מפתחות הצפנה ויוצרים מפתח סשן משותף, בו ישתמשו להצפנת כל התקשורת העתידית ביניהם.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את ההבדל בין HTTP ל-HTTPS ומדוע HTTPS עדיף בסביבות ייצור (Production)?",
        "a": "HTTP הוא פרוטוקול להעברת נתונים ברשת ללא הצפנה, מה שהופך את התקשורת לפגיעה ליירוט ושינוי על ידי גורמים זדוניים. HTTPS, לעומת זאת, הוא הגרסה המאובטחת של HTTP, המשתמשת בפרוטוקול TLS/SSL להצפנת התקשורת בין הלקוח לשרת. HTTPS עדיף בסביבות ייצור בשל אבטחה משופרת, המגנה על שלמות וסודיות הנתונים, כמו גם מיתוסף לאמון המשתמשים ומשפר את דירוג ה-SEO. רוב הדפדפנים המודרניים גם מציגים אזהרות אבטחה לאתרים שלא משתמשים ב-HTTPS.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו Reverse Proxy ומתי נהוג להשתמש בו בארכיטקטורת רשת?",
        "a": "Reverse Proxy הוא שרת המקבל בקשות מלקוחות ומעביר אותן לשרתים פנימיים (Backend Servers) מתאימים ברשת. בניגוד ל-Forward Proxy, המגן על לקוחות, Reverse Proxy מגן על השרתים. הוא משמש לשיפור אבטחה, איזון עומסים, האצת תוכן סטטי (caching) ופישוט כתובות URL. לדוגמה, Reverse Proxy יכול לנתב בקשות שונות למיקרו-שירותים שונים באותה כתובת דומיין, או לספק SSL termination עבור מספר רב של שרתים פנימיים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה תפקידם של Firewalls ו-Security Groups באבטחת רשת ב-DevOps?",
        "a": "Firewalls ו-Security Groups הם כלי אבטחה המשמשים לשליטה בתעבורת הרשת הנכנסת והיוצאת. Firewall הוא קו הגנה ראשון ברמת הרשת, המנטר ומסנן תעבורה על בסיס כללים מוגדרים מראש כמו פורטים וכתובות IP. Security Groups, הנפוצים בסביבות ענן כמו AWS, הם Firewall-ים וירטואליים שפועלים ברמת המופע (Instance) או קבוצת מופעים, ומאפשרים שליטה עדינה יותר על התעבורה למופעים ספציפיים. שניהם קריטיים במניעת גישה לא מורשית והגנה על מערכות מפני איומי אבטחה, ומאפשרים ליישם פרקטיקות אבטחה של 'הפחות הרשאות' (Least Privilege).",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר מהי טכנולוגיית NAT (Network Address Translation) ומדוע היא חשובה ברשתות מודרניות?",
        "a": "NAT היא טכנולוגיה המאפשרת למספר התקנים ברשת מקומית לשתף כתובת IP ציבורית אחת לצורך גישה לאינטרנט. כאשר התקן ברשת הפנימית שולח בקשה החוצה, הנתב שמבצע NAT משנה את כתובת ה-IP המקומית לכתובת ה-IP הציבורית שלו. NAT חשובה מאוד מכמה סיבות: היא חוסכת בכתובות IPv4 ציבוריות (שהולכות ואוזלות), מספקת שכבת אבטחה בסיסית על ידי הסתרת מבנה הרשת הפנימית, ומפשטת את ניהול הרשת. היא הבסיס למחשוב ענן פרטי ולשימוש ב-Docker ו-Kubernetes במקרים מסוימים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "אילו פורטים נפוצים אתה מכיר, ומה השימוש העיקרי של כל אחד מהם בסביבת שרתים?",
        "a": "ישנם מספר פורטים נפוצים אשר בעלי תפקידים מוגדרים. פורט 22 משמש עבור SSH, המאפשר גישה מאובטחת מרחוק למערכות לינוקס. פורט 80 מיועד לתעבורת HTTP לא מוצפנת, ופורט 443 משמש לתעבורת HTTPS מוצפנת, שניהם חיוניים לשרתי ווב. פורט 3306 משמש מסדי נתונים של MySQL/MariaDB, ופורט 5432 משמש מסדי נתונים של PostgreSQL, המאפשרים לשרתי יישומים להתחבר לבסיסי נתונים. הבנת השימוש בפורטים אלו חיונית להגדרת כללי Firewall ותעבורה מאובטחת ברשת.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר לעומק מהו CDN (Content Delivery Network) וכיצד הוא משפר את ביצועי וזמינות היישומים בסביבת DevOps?",
        "a": "CDN הוא רשת של שרתי Cache מבוזרים גיאוגרפית, שתפקידם לספק תוכן (תמונות, סרטוני וידאו, קבצי JavaScript ו-CSS) למשתמשים קרובים יותר אליהם פיזית. כאשר משתמש מבקש תוכן, ה-CDN מנתב אותו לשרת הקרוב ביותר אליו, מה שמפחית את זמן ההשהיה (latency) ואת העומס על שרתי ה-Origin. זה משפר משמעותית את מהירות טעינת האתר ומגביר את עמידות המערכת בפני עומסים גבוהים והתקפות DDoS.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו למעשה ה-handshake של TLS/SSL וכיצד הוא מבטיח תקשורת מאובטחת בין שרת ללקוח?",
        "a": "ה-TLS/SSL handshake הוא תהליך התחלתי מורכב שבו הלקוח והשרת מנהלים משא ומתן על פרמטרים של הצפנה לפני תחילת העברת הנתונים. במהלך שלבים אלו הם מאמתים זה את זה (באמצעות תעודות דיגיטליות), מסכימים על אלגוריתמי הצפנה ויוצרים מפתח סודי משותף (symmetric key) להמשך התקשורת. תהליך זה מבטיח שהתקשורת תהיה מוצפנת, מאומתת ומוגנת מפני ציתות ושינוי נתונים על ידי גורם זדוני.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את עקרון הפעולה של Firewalls ו-Security Groups וכיצד הם משמשים להגנה על משאבי ענן ב-DevOps?",
        "a": "Firewalls ו-Security Groups הם מנגנוני אבטחת רשת השולטים על תעבורה נכנסת ויוצאת. Firewall הוא בדרך כלל מכשיר או תוכנה המפקח על זרימת הנתונים בין רשתות שונות ומחיל כללים לפיהם תעבורה מותרת או חסומה. Security Groups, הנפוצים בסביבות ענן כמו AWS, הם סוג של Firewall וירטואלי ברמת המופע (instance) או ממשק הרשת, המאפשרים להגדיר כללים עבור תעבורה מותרת לפי פורטים, פרוטוקולים וכתובות IP. שניהם קריטיים להגבלת הגישה לשרתים ולמשאבי ענן רק לתעבורה לגיטימית, ובכך מקטינים את שטח התקיפה הפוטנציאלי.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר מהי כתובת IP ומה ההבדל בין IPv4 ל-IPv6.",
        "a": "כתובת IP (Internet Protocol) היא מזהה מספרי המשמש לזיהוי ייחודי של מכשיר ברשת מחשבים המשתמשת בפרוטוקול האינטרנט. IPv4 משתמשת בכתובות באורך 32 סיביות, בפורמט של ארבעה מספרים המופרדים בנקודות (לדוגמה: 192.168.1.1). IPv6 היא הגרסה החדשה יותר, המשתמשת בכתובות באורך 128 סיביות, בפורמט של שמונה קבוצות של ארבע ספרות הקסה-דצימליות (לדוגמה: 2001:0db8:85a3:0000:0000:8a2e:0370:7334). ההבדל המרכזי הוא הגידול העצום במספר הכתובות הזמינות ב-IPv6, דבר הכרחי בשל המחסור בכתובות IPv4.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה תפקידו של DNS ברשת וכיצד הוא עובד?",
        "a": "DNS (Domain Name System) הוא שירות המשמש לתרגום שמות מתחם (כמו www.example.com) לכתובות IP. הוא עובד כמו ספר טלפונים של האינטרנט: כאשר משתמש מזין שם מתחם בדפדפן, הדפדפן שולח בקשה לשרת DNS, אשר מחזיר את כתובת ה-IP המתאימה. שירות זה מאפשר למשתמשים לגשת לאתרים באמצעות שמות קלים לזכירה במקום לרשום כתובות IP מספריות.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר מהו Firewall וכיצד הוא תורם לאבטחת רשת.",
        "a": "Firewall הוא מערכת אבטחת רשת המנטרת ובודקת תעבורת רשת נכנסת ויוצאת. הוא מחליט אילו חבילות נתונים לאפשר לעבור ואילו לחסום, בהתבסס על סט מוגדר מראש של כללי אבטחה. פיירוול תורם לאבטחת רשת על ידי יצירת מחסום בין רשת פנימית מאובטחת לבין רשתות חיצוניות לא מהימנות, ובכך מגן מפני גישה בלתי מורשית, התקפות זדוניות ופרצות אבטחה.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה תפקידו של Load Balancer בארכיטקטורת רשת של יישומים?",
        "a": "Load Balancer הוא מכשיר או שירות המפזר תעבורת רשת באופן שווה בין מספר שרתים. תפקידו העיקרי הוא לשפר את זמינות וביצועי היישומים על ידי מניעת עומס יתר על שרת יחיד. הוא מבטיח שכל שרת יקבל כמות עבודה אופטימלית, מאפשר טיפול בכשלים (failover) על ידי ניתוב תעבורה לשרתים תקינים, ותומך בסקלאביליות אופקית של היישום.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      }
    ]
  },
  {
    "subject": "Git",
    "icon": "GT",
    "items": [
      {
        "q": "איך מפתחים עובדים על קוד יחד כשיש רק repo אחד?",
        "a": "עובדים עם branches ולא נוגעים ישירות ב-main. בדרך כלל יש main לפרודקשן, dev לאינטגרציה ו-feature/* לפיצ'רים. כל מפתח עובד על branch משלו, מבצע commits, מסנכרן (pull) לפני push כדי לקלוט שינויים, פותר conflicts מקומית ופותח Pull Request ל-review ו-merge מסודר.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "אם יש הרבה מיקרו-שירותים - לכל אחד repo משלו?",
        "a": "ברוב הארגונים כן (MultiRepo) - לכל שירות repo עצמאי, גרסאות נפרדות, CI/CD נפרד ועצמאות לצוותים. בגישה מודרנית יש לעיתים MonoRepo עם כלים כמו Nx או Bazel שמאפשרים שירותים מרובים ב-repo אחד. אין תשובה אחת נכונה - תלוי בארגון, בגודל הצוות ובכלי הבנייה.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר מתי ולמה נעדיף להשתמש ב-git rebase על פני git merge, ומהן ההשלכות האפשריות של כל גישה על היסטוריית הגיט.",
        "a": "git rebase משנה את היסטוריית הקומיטים על ידי העברת רצף קומיטים לראש ענף אחר, וכך יוצר היסטוריה לינארית ונקייה יותר. לעומת זאת, git merge משלב את היסטוריות הענפים ויוצר קומיט מיזוג חדש. rebase עדיף כאשר רוצים לשמור על היסטוריה נקייה לפני מיזוג לענף ראשי, אך הוא דורש זהירות בעבודה על ענפים משותפים, בעוד merge פשוט ושומר על היסטוריה מלאה אך פחות לינארית.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו Git Cherry-pick ומתי תשתמש בו בסביבת עבודה של DevOps? תאר תרחיש לדוגמה.",
        "a": "Git Cherry-pick מאפשר בחירה של קומיט ספציפי מענף אחד ויישום שלו על ענף אחר, ללא צורך במיזוג כל הענף. זה שימושי במיוחד כאשר צריך להעביר תיקון קריטי או פיצ'ר קטן וספציפי לענף שחרור או לענף ראשי, לדוגמה, כשפורץ באג בסביבת Production וצריך להעביר תיקון מהיר מענף פיתוח לענף הקורספונדנטי. זה עוזר לשמור על הפרדה נקייה בין הענפים ולמנוע העברה של קוד לא רצוי שעוד לא מוכן.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את הרעיון של Git Squash ומדוע הוא חשוב בתהליכי CI/CD. מתי תבחר לבצע Squash?",
        "a": "Git Squash מאחד מספר קומיטים לקומיט יחיד, ובכך יוצר היסטוריה נקייה יותר ועם פחות 'רעש' ב-git log. הוא חשוב בתהליכי CI/CD מכיוון שהוא מפשט את היסטוריית הגיט, מקל על בדיקות אבטחה וכמובן על Review קוד. נבחר לבצע Squash כאשר ענף פיצ'ר מכיל קומיטים קטנים ובינוניים רבים שמייצגים עבודת פיתוח מתמשכת, ואנחנו רוצים לאחד אותם לקומיט אחד מהותי לפני המיזוג לענף הראשי, וכך לייצג את הפיצ'ר כולו כשינוי אטומי אחד.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "כיצד מטפלים בקונפליקטים ב-Git? תאר את הכלים והתהליכים העיקריים לפתרון קונפליקטים.",
        "a": "קונפליקטים ב-Git מתרחשים כאשר שני ענפים עשו שינויים באותה שורה או קובץ, ו-Git לא יודע לפתור אותם אוטומטית. טיפול בקונפליקטים כולל פתיחת הקובץ המכיל את הקונפליקט וזיהוי הסימונים המיוחדים של Git (<<<<<<<, =======, >>>>>>>), ולאחר מכן עריכה ידנית של הקובץ כדי לשלב את השינויים הרצויים משני הענפים. לבסוף, יש לסמן את הקובץ כפתור עם git add ולבצע קומיט חדש או להשלים את ה-merge/rebase.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "השווה בין Git flow ל-Trunk-based development במונחים של מתודולוגיות פיתוח והשפעתן על תהליכי DevOps. ציין יתרונות וחסרונות של כל אחת.",
        "a": "Git flow מתאפיין בריבוי ענפים בעלי תפקידים ספציפיים (master, develop, feature, release, hotfix), ומציע מבנה מוגדר וקפדני, המתאים לפרויקטים עם מחזורי שחרור ארוכים. לעומתו, Trunk-based development מתמקד בענף ראשי יחיד (trunk) שכל המפתחים מבצעים אליו קומיטים קטנים ותכופים, ומאפשר שחרורים מהירים ואינטגרציה מתמדת. Git flow יכול להקשות על Continuous Delivery בשל מורכבות הענפים, בעוד Trunk-based development תומך בו באופן טבעי, אך דורש עבודה יומית וקפדנית עם קומיטים קטנים מאוד.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהם Git Hooks ומתי תשתמש בהם כדי לאכוף מדיניות אוטומטית בסביבת פיתוח? תן דוגמה לשימוש ב-hook מסוים.",
        "a": "Git Hooks הם סקריפטים ש-Git מפעיל באופן אוטומטי באירועים מסוימים (כמו pre-commit, post-merge, pre-push) ובכך מאפשרים אוטומציה ואכיפת מדיניות. הם יכולים לשמש לבדיקת קוד לפני קומיט, לוודא פורמט קוד אחיד, להריץ בדיקות יחידה או לאכוף כללי שמות לקומיטים. לדוגמה, 'pre-commit hook' יכול לבדוק שכל הקבצים עברו לינט (lint) לפני ביצוע קומיט, ובכך למנוע קומיט של קוד שמפר את סטנדרטי הסגנון שהוגדרו בפרויקט.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את ההבדל העיקרי בין Git Tags ל-Git Branches וכיצד כל אחד מהם משמש בפרויקט DevOps.",
        "a": "Git Tags הם מצביעים קבועים לנקודה ספציפית בהיסטוריית הגיט, ומשמשים לרוב לציון גרסאות שחרור (releases) יציבות. הם אינם משתנים ונועדו לציין נקודות ציון חשובות, כמו גרסה 1.0. לעומת זאת, Git Branches הם מצביעים נעים המאפשרים עבודה מקבילה על תכונות חדשות או תיקוני באגים, והם משתנים ככל שקומיטים נוספים מתבצעים עליהם. Tags עוזרים בזיהוי גרסאות שחרור בעוד Branches מאפשרים פיתוח מקבילי ואת המיזוג ההדרגתי של קוד לתוך הזרם המרכזי.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה ההבדל בין git reset ל-git revert, ומתי תבחר להשתמש בכל אחד מהם? תאר את בטיחות השימוש.",
        "a": "git reset משנה את היסטוריית הגיט על ידי הזזת ראש הענף אחורה, עם אפשרות למחוק קומיטים. הוא נחשב 'מסוכן' יותר לשימוש בענפים משותפים כי הוא משנה את ההיסטוריה ועלול לדרוש 'force push'. לעומתו, git revert יוצר קומיט חדש שמבטל את השינויים של קומיט קודם, ובכך שומר על היסטוריית גיט נקייה ולא משנה אותה, ולכן הוא בטוח יותר לשימוש בענפים משותפים. reset משמש בדרך כלל לתיקונים מקומיים, בעוד revert עדיף במקרים שבהם צריך לבטל שינוי שכבר נדחף לשרת מרוחק.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את המושג Git Submodules. מתי מומלץ להשתמש בהם ומתי עדיף להימנע מזה? מהן החלופות?",
        "a": "Git Submodules מאפשרים לשלב מאגר Git אחד בתוך מאגר Git אחר, ולשמור על היסטוריית הגרסאות שלו. הם שימושיים בפרויקטים בהם יש תלות במרכיב חיצוני ספציפי שמתפתח באופן עצמאי. עם זאת, הם יכולים להיות מורכבים וקשים לניהול, ועלולים לגרום לבעיות תאימות גרסאות. חלופות כמו ניהול חבילות (לדוגמה, npm, Maven), בניית תמונות Docker, או שימוש במונו-רפו (mono-repo) עשויות להיות פתרון עדיף כאשר רמת המורכבות של Submodules אינה מוצדקת או כאשר יש צורך בניהול ובקרת גרסאות פשוטים יותר.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו קובץ .gitignore וכיצד הוא תורם לניהול יעיל של פרויקט גיט? תאר את הכללים והתחביר העיקריים שלו.",
        "a": ".gitignore הוא קובץ טקסט שמכיל רשימה של קבצים ותיקיות שגיט צריך להתעלם מהם ולא לעקוב אחריהם. הוא חיוני לשמירה על סביבת עבודה נקייה ממסמכים זמניים, קבצי קומפילציה, יומנים, קבצי תצורה רגישים (כמו API keys), ו dependencies של הפרויקט. התחביר שלו מאפשר ציון קבצים ספציפיים, תיקיות, ושימוש בתווים כלליים (wildcards) או פסילת כללים באמצעות !. לדוגמה, אפשר לכלול *.log כדי להתעלם מכל קבצי log, או node_modules/ כדי להתעלם מהתיקייה הזו.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "כיצד תתמודד עם קבצים גדולים (Large Files) במאגר Git, ומהן החלופות או הכלים שבהם תשתמש כדי לנהל אותם ביעילות?",
        "a": "קבצים גדולים במאגר Git עלולים להאט מאוד את פעולות השיבוט והמשיכה, ולפגוע בביצועים. הפתרון המומלץ הוא שימוש ב-Git LFS (Large File Storage), שמאפשר לאחסן קבצים גדולים מחוץ למאגר הראשי של Git תוך שמירה על מצביעים אליהם בתוך המאגר. אפשרויות נוספות כוללות שימוש בשירותי אחסון ענן לקבצים בינאריים גדולים וקישור חיצוני אליהם, או שקילת שימוש במערכת בקרת גרסאות אחרת המותאמת יותר לטיפול ב-large binaries.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "באילו דרכים ניתן להבטיח איכות קוד ועמידה בסטנדרטים באמצעות מנגנונים של Git, ובמיוחד על ידי שימוש ב-Git Hooks?",
        "a": "ניתן להבטיח איכות קוד ועמידה בסטנדרטים באמצעות Git Hooks על ידי הפעלת סקריפטים אוטומטיים בשלבים שונים של תהליך ה-committing וה-pushing. לדוגמה, באמצעות pre-commit hook ניתן להריץ linters, בדיקות יחידה או בדיקות סגנון קוד לפני שה-commit נוצר בפועל, ובכך למנוע קוד שאינו תקין מלהיכנס למאגר. pre-receive hooks בצד השרת יכולים לאכוף מדיניות, כמו חתימת קומיטים או אישור של קומיטים מסוימים, ובכך לשפר את אבטחת המאגר.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר כיצד git rebase משנה את היסטוריית הגיט, ומדוע נבחר להשתמש בו דווקא בגישה של 'clean history'. מהם הסיכונים העיקריים הכרוכים בשימוש ב-rebase על ענפים משותפים?",
        "a": "git rebase משנה את היסטוריית הגיט על ידי העתקת ה-commits מרצף אחד והדבקתם מחדש על גבי commit אחר, מה שיוצר היסטוריה לינארית ונקייה יותר. נבחר להשתמש בו בגישה של 'clean history' כדי להימנע מ-merge commits מיותרים וכדי לשמור על עקביות וקריאות בהיסטוריית הפרויקט. הסיכונים העיקריים בשימוש ב-rebase על ענפים משותפים הם שכתוב היסטוריה ציבורית, מה שעלול לגרום לקונפליקטים רבים עבור מפתחים אחרים שכבר עשו pull לענף, ולפגוע בשיתוף הפעולה.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      }
    ]
  },
  {
    "subject": "Docker",
    "icon": "DK",
    "items": [
      {
        "q": "תסביר במילים פשוטות מה זה Docker ולמה משתמשים בו",
        "a": "Docker מאפשר להריץ אפליקציות בתוך 'קונטיינרים' - קופסאות מבודדות שמכילות את כל מה שהאפליקציה צריכה: קוד, ספריות, תלויות וקונפיגורציה. במקום להתקין הכל ידנית, Docker אורז את האפליקציה עם סביבת הריצה שלה כך שתרוץ זהה בכל מקום. הוא פותר את 'אצלי עובד', מאפשר מיקרו-שירותים ומשתלב מצוין ב-CI/CD.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה ההבדל בין Image לקונטיינר?",
        "a": "Image הוא תבנית סטטית, קריאה בלבד, שמכילה את כל מה שצריך כדי להריץ אפליקציה - קוד, ספריות ו-OS minimal. Container הוא instance רץ של Image. מ-Image יחיד אפשר להריץ הרבה קונטיינרים, ולכל קונטיינר יש שכבת writable משלו ששינויים שלו לא משפיעים על ה-Image או על קונטיינרים אחרים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהם הרכיבים של Docker?",
        "a": "Docker מורכב מ-Docker Client - הכלי שאיתו המשתמש מתקשר (docker build/run/pull) - ומ-Docker Daemon, תהליך שרץ ברקע ומבצע את כל הפעולות בפועל: יצירה והרצה של קונטיינרים, ניהול Images, networks ו-volumes, ותקשורת עם ה-Registry. הקליינט שולח בקשות דרך API ל-Daemon, וה-Daemon מבצע אותן.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את הרעיון של multi-stage builds ב-Dockerfile ומדוע הוא חשוב לאופטימיזציית גודל אימג'ים.",
        "a": "Multi-stage builds מאפשרים לנו להשתמש במספר אימג'ים זמניים במהלך בניית אימג'Docker  סופי. זה מאפשר לנו לכלול רק את מה שנדרש להרצת האפליקציה באימג' הסופי, ובכך לצמצם משמעותית את גודלו. לדוגמה, נוכל להשתמש בשלב ראשון לקומפילציה של קוד מקור, ובשלב שני להעתיק רק את הקבצים המקומפלים לאימג' קטן יותר המיועד להרצה.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה ההבדל בין Docker volumes ל-bind mounts, ואיזה מהם עדיף ברוב המקרים ומדוע?",
        "a": "Docker volumes מנוהלים על ידי Docker, וממוקמים בנתיב ספציפי במערכת הקבצים של המארח. Bind mounts מאפשרים למפות קובץ או תיקייה ישירות ממערכת הקבצים של המארח לתוך קונטיינר. Volume עדיפים ברוב המקרים מכיוון שהם ניידים יותר, קלים לגיבוי, ומאפשרים הפרדה ברורה בין נתוני הקונטיינר למערכת הקבצים של המארח.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "תאר את ההבדלים העיקריים בין Docker network drivers מסוג bridge, host ו-overlay, ומתי נשתמש בכל אחד מהם.",
        "a": "רשת bridge היא ברירת המחדל ומספקת בידוד בין קונטיינרים לרשת החיצונית. רשת host משתמשת ישירות בממשק הרשת של המארח ומבטלת את שכבת ה-networking של Docker. רשת overlay מאפשרת לקונטיינרים לפרוס על פני מספר מארחים שונים כחלק מקלאסטר Docker Swarm. נשתמש ב-bridge לקונטיינרים בודדים, ב-host כאשר הקונטיינר צריך גישה ישירה ליציאות של המארח, וב-overlay בסביבת Swarm מבוזרת.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את המושגים Docker image layers ו-caching, וכיצד הם תורמים לייעול תהליך בניית אימג'ים.",
        "a": "כל פקודה ב-Dockerfile יוצרת שכבה חדשה (layer) באימג' ה-Docker. שכבות הן Read-Only וניתנות לשימוש חוזר. כאשר בונים אימג', Docker מנסה להשתמש בשכבות קיימות מה-cache שלו אם לא חל שינוי בשכבות קודמות. זה מזרז משמעותית את תהליך הבנייה, מכיוון שרק השכבות שהשתנו והשכבות שאחריהן צריכות להיבנות מחדש.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהן ה-best practices העיקריות לאופטימיזציית גודל אימג' Docker?",
        "a": "ישנן מספר practices לאופטימיזציית גודל אימג' כמו שימוש ב-multi-stage builds, בחירת image base קטן ומינימליסטי כגון Alpine, הימנעות מהתקנת חבילות מיותרות, וצימצום מספר השכבות במידת האפשר על ידי שילוב פקודות RUN עם `&&` וניקוי קבצים זמניים. כמו כן, מומלץ לוודא שה-`.dockerignore` מכיל את כל הקבצים שאינם נחוצים לבנייה.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "תאר את ההבדל בין Docker ENTRYPOINT ל-CMD, וכיצד הם משפיעים על הפעלת קונטיינרים.",
        "a": "CMD מציין פקודה שמופעלת כאשר הקונטיינר מופעל, וניתן לדרוס אותה בקלות על ידי ארגומנטים שמועברים לפקודת `docker run`. ENTRYPOINT מגדיר את הפקודה הראשית או את ה'תהליך הראשי' של הקונטיינר כפועל יוצא, ובדרך כלל לא נדרס. נהוג להשתמש ב-ENTRYPOINT אם רוצים שהקונטיינר יתנהג כמו קובץ הפעלה (executable), ו-CMD להעברת פרמטרים נוספים ל-ENTRYPOINT.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את החשיבות של Docker registry ומה הוא מאפשר באקוסיסטם של Docker.",
        "a": "Docker registry הוא שירות אחסון עבור אימג'י Docker. הוא מאפשר לנו לאחסן, לשתף ולנהל אימג'ים באופן מרכזי. בזכות ה-registry, ניתן לדחוף (push) אימג'ים לאחר בנייתם ולמשוך (pull) אותם מכל מכונה עם Docker, מה שמסייע בבנייה של תהליכי CI/CD ופריסה עקביים בסביבות שונות.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה זה Docker healthcheck ומדוע הוא חשוב בניהול קונטיינרים בסביבת production?",
        "a": "Docker healthcheck מאפשר להגדיר דרך לבדוק אם קונטיינר אכן מתפקד כראוי, ולא רק רץ. הוא בודק אם השירות בתוך הקונטיינר מגיב בצורה תקינה. זה חשוב בסביבת production כדי ש-Docker orchestration tools כמו Kubernetes יוכלו לזהות קונטיינרים לא תקינים, להפעיל אותם מחדש או להחליף אותם, ובכך לשמור על זמינות השירותים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "תן דוגמאות ל-Dockerfile best practices הקשורות לאבטחה.",
        "a": "Best practices לאבטחה ב-Dockerfile כוללות שימוש באימג'ים בסיסיים רשמיים ומינימליים ככל האפשר, הפעלת תהליכים בתוך הקונטיינר כמשתמש שאינו root (user account לא פרבילגיסטי), הימנעות מחשיפת יציאות מיותרות, וניקוי קבצים ותוכנות זמניים או מיותרים בתום ה-build. בנוסף, מומלץ לבצע סריקות אבטחה לאימג'ים ולעדכן תלויות באופן קבוע.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "כיצד היית ניגש לאבטחה של קונטיינרי Docker מעבר ל-Dockerfile עצמו?",
        "a": "מעבר ל-Dockerfile, אבטחת קונטיינרי Docker כוללת אבטחת ה-daemon של Docker על ידי הגבלת גישה ל-API שלו, פיקוח על רשאות ו-privileges שניתנים לקונטיינרים (לדוגמה, הימנעות מ-`--privileged`), סריקת אימג'ים לזיהוי חולשות אבטחה לפני הטמעה, ושימוש ברשתות Docker מבודדות (isolated networks). כמו כן, חשוב לעדכן באופן שוטף את Docker ואת מערכת ההפעלה של המארח.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר כיצד ניתן להשתמש ב-security best practices ב-Dockerfile כדי להקשיח (harden) את אבטחת הקונטיינר. פרט לפחות שתי דוגמאות קונקרטיות.",
        "a": "ניתן להשתמש ב-security best practices ב-Dockerfile על ידי שימוש במשתמשים לא מיוחסים (non-privileged users) באמצעות הפקודה 'USER', וזאת כדי למנוע הרצת תהליכים כ-root. בנוסף, מומלץ להשתמש באימג'ים בסיסיים קטנים ומאובטחים כמו Alpine, ולהימנע מהתקנת חבילות מיותרות. כמו כן, כדאי להשתמש ב-'COPY --chown' כדי לוודא שלקבצים והתיקיות יש הרשאות מתאימות, ולהימנע מלהעתיק קבצים רגישים או Credential לתוך האימג'.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו תפקיד ה-.dockerignore file וכיצד הוא תורם לאופטימיזציית גודל האימג' וביצועי ה-build?",
        "a": "קובץ .dockerignore פועל בדומה לקובץ .gitignore. הוא מגדיר קבצים ותיקיות שיש להתעלם מהם בזמן בניית האימג', ולא לכלול אותם ב-context שנשלח ל-Docker daemon. דבר זה תורם להקטנת גודל האימג' הסופי בכך שהוא מונע הכללה של קבצים מיותרים כמו קבצי פיתוח מקומיים או לוגים. בנוסף, הוא משפר את ביצועי ה-build על ידי הקטנת כמות המידע שיש להעביר ל-daemon ועיבודו.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "תאר את החשיבות של Dockerfile linting וסרוק כלים נפוצים שיכולים לסייע בכך. למה זה חשוב בתהליך פיתוח ותחזוקת Docker images?",
        "a": "Dockerfile linting הוא תהליך של ניתוח קובצי Dockerfile כדי לוודא שהם תואמים ל-best practices, תקני קידוד ומדיניות אבטחה. הוא מסייע בזיהוי שגיאות פוטנציאליות, חורי אבטחה, ושיפור יעילות בניית האימג'ים. כלים נפוצים כוללים את Hadolint, אשר יכול לבצע בדיקות סטטיות מקיפות ל-Dockerfile. שימוש בלינטינג מבטיח Dockerfiles איכותיים, קריאים ויעילים יותר, מה שמוביל לאימג'ים קטנים ומאובטחים יותר ולאוטומציה משופרת בתהליכי CI/CD.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את הרעיון של Docker content trust (DCT) וכיצד הוא מסייע באבטחת Docker images.",
        "a": "Docker content trust (DCT) מאפשר לוודא את האותנטיות והאינטגריטי של אימג'ים. הוא פועל באמצעות חתימות דיגיטליות, המבטיחות שהאימג'ים שאתה מוריד או מריץ אכן נוצרו על ידי יוצרם המקורי ולא שונו בדרך. DCT מגן מפני התקפות \"man-in-the-middle\" או שימוש באימג'ים מזויפים או פגומים. כאשר DCT מופעל, Docker יאפשר רק אימג'ים חתומים ומהימנים, ובכך מקטין משמעותית את הסיכון הביטחוני.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהם האתגרים בניהול Docker images בסביבת production בקנה מידה גדול, וכיצד ניתן להתמודד איתם?",
        "a": "ניהול Docker images בקנה מידה גדול מציב אתגרים כמו שמירה על גרסאות אימג'ים, אבטחה, אופטימיזציה של גודל, וניהול Lifecycle. כדי להתמודד עם אתגרים אלו, יש להשתמש ב-Container Registry פרטי או מנוהל כמו Docker Hub או ECR לצורך אחסון וניהול גרסאות מאובטח. כדאי להטמיע סריקות אבטחה אוטומטיות לאימג'ים (image scanning) בתהליך ה-CI/CD, ולנקוט ב-best practices ל-Dockerfile וב-multi-stage builds כדי לשמור על גודל אימג'ים קטן. בנוסף, יש ליישם מדיניות לגיבוי ומחיקת אימג'ים ישנים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו Docker וכיצד הוא מסייע בתהליכי פיתוח ובדיקות?",
        "a": "Docker היא פלטפורמה המאפשרת אריזה, הפצה והרצה של יישומים בסביבות מבודדות הנקראות קונטיינרים. היא מסייעת מאוד בתהליכי פיתוח ובדיקות בכך שהיא יוצרת סביבות עבודה עקביות ומבודדות, המונעות בעיות",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את ההבדל בין Image ל-Container ב-Docker.",
        "a": "Image ב-Docker הוא תבנית קריאה בלבד (read-only) המכילה את כל הקבצים, הספריות וההגדרות הדרושות להפעלת יישום. לעומת זאת, Container הוא מופע חי ורצוי של Image. ניתן ליצור מספר Containerים מאותו Image, וכל Container פועל באופן מבודד עם סביבת זמן ריצה משלו.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו Dockerfile ומה חשיבותו בתהליך יצירת Image?",
        "a": "Dockerfile הוא קובץ טקסט המכיל סט הוראות לבניית Image ב-Docker. הוא מתאר את כל השלבים הנדרשים ליצירת ה-Image, כגון בחירת בסיס (base image), התקנת תלויות, העתקת קבצים והגדרת פקודות הרצה. חשיבותו היא ביכולת לשחזר באופן עקבי את תהליך בניית ה-Image, לנהל גרסאות ולהפוך את תהליך הבנייה לאוטומטי.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "כיצד Docker תורם לפתרון בעיית ה-'It works on my machine'?",
        "a": "Docker פותר את בעיית ה-'It works on my machine' על ידי אריזת היישום וכל התלויות שלו לקונטיינר מבודד. קונטיינר זה מכיל את כל מה שהיישום צריך כדי לפעול, ובכך מבטיח שהיישום יפעל בצורה זהה בכל סביבה בה הקונטיינר יורץ, ללא קשר למערכת ההפעלה או התוכנה המותקנת במחשב המארח.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      }
    ]
  },
  {
    "subject": "Kubernetes",
    "icon": "K8",
    "items": [
      {
        "q": "מה זה Rolling Update ב-Kubernetes?",
        "a": "Rolling Update היא טכניקת עדכון של Deployment ללא downtime: K8s מוריד פודים ישנים ומעלה חדשים בהדרגה לפי הגדרות maxSurge ו-maxUnavailable, כך שתמיד יש פודים זמינים שמשרתים תעבורה. אם משהו נכשל, אפשר לבצע rollout undo ולחזור לגרסה הקודמת.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה זה CRD (Custom Resource Definition)?",
        "a": "CRD היא יכולת להרחיב את ה-API של Kubernetes ולהגדיר סוגי אובייקטים חדשים. כך אפשר להוסיף משאבים מותאמים אישית - למשל 'Database' או 'Backup' - שמתנהגים בדיוק כמו Pod או Service. בדרך כלל CRD משולב עם Operator שמכיל את הלוגיקה לניהול המשאב.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "יש מערכת עם הרבה פניות והפודים קורסים - מה תעשה?",
        "a": "מגדירים HPA (Horizontal Pod Autoscaler) על מטריקה רלוונטית - CPU, RAM או custom metric - שמכפיל את מספר הפודים לפי עומס. חשוב להבחין: אם יש הרבה פניות מקבילות מגדילים את מספר הפודים, ואם כל בקשה כבדה ולוקחת זמן רב מגדילים את ה-requests/limits של כל פוד.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "אפליקציה מחזירה שגיאה כשמנסים לגשת אליה - איך תאבחן?",
        "a": "בודקים בסדר הזה: שהפודים במצב Running ו-Ready, שה-Service מצביע על הפודים הנכונים (selector + endpoints), שה-DB ושירותים תלויים זמינים, ששימוש המשאבים סביר ולא מתרחש OOM, ושה-Ingress מפנה ל-Service הנכון. במקביל בודקים logs ו-events של ה-Pod.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהם הרכיבים העיקריים של Kubernetes?",
        "a": "Control Plane כולל את API Server (נקודת הכניסה), Scheduler (משייך פודים ל-nodes), Controller Manager (מוודא שהמצב בפועל = הרצוי) ו-etcd (מסד נתונים מסוג key-value שמחזיק את מצב הקלאסטר). Worker Nodes מריצים Kubelet (שמריץ פודים), Kube-Proxy (רשת) ו-Container Runtime. אובייקטים נפוצים: Pod, Deployment, Service, Ingress.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה זה הקובץ kubeconfig ומה הוא מכיל?",
        "a": "kubeconfig (לרוב ב-~/.kube/config) הוא הקובץ שלפיו kubectl יודע להתחבר לקלאסטר. הוא מכיל clusters (כתובות API server וצ'רטיפיקטים), users (credentials), ו-contexts ששילובים של cluster + user + namespace ברירת מחדל. שינוי context משנה את הקלאסטר/namespace שמולו עובדים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה זה Ingress Controller?",
        "a": "Ingress Controller הוא רכיב ב-Kubernetes שמנהל גישה חיצונית ל-Services לפי חוקי Ingress. בקשה מהאינטרנט מגיעה ל-Load Balancer חיצוני, עוברת ל-Ingress Controller (כמו NGINX או Traefik), והוא מנתב לפי host או path ל-Service המתאים. תומך גם ב-TLS termination ו-routing מתקדם.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה זה Operator ב-Kubernetes?",
        "a": "Operator הוא אפליקציה שרצה בתוך הקלאסטר ומנהלת אפליקציות מורכבות באופן אוטומטי. בנויה בדרך כלל על CRDs בשילוב reconciliation loop, ומבצעת פעולות יום-יום כמו יצירה, עדכון, גיבוי ושחזור. אפשר לחשוב עליה כעל 'מנהל מערכת אוטומטי' עבור אפליקציה ספציפית.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "איך בודקים שימוש בזיכרון של פודים?",
        "a": "kubectl top pods מציג שימוש CPU ו-RAM בזמן אמת (דורש metrics-server). kubectl describe pod מציג את ה-requests/limits שהוגדרו ואירועים כמו OOMKilled. kubectl get --raw מחזיר נתונים גולמיים בפורמט JSON. בדוקר עצמו אפשר להשתמש ב-docker stats.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה ההבדל בין request ל-limit?",
        "a": "Requests היא כמות המשאבים שמובטחת לפוד, וה-Scheduler משתמש בה כדי לבחור על איזה Node להניח את הפוד. Limits הוא הגבול העליון שהפוד יכול להשתמש בו: חריגה ב-CPU גורמת ל-throttling, וחריגה ב-RAM גורמת ל-OOMKilled. בקצרה: Requests = כמה אני מבטיח, Limits = כמה מותר לי.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה התפקיד של ArgoCD?",
        "a": "ArgoCD הוא כלי GitOps שמבצע Continuous Deployment ל-Kubernetes על בסיס Git. הוא מנטר repository באופן רציף, ואם זוהה שינוי הוא דואג שהמצב בקלאסטר יתאים למה שמוגדר ב-Git (reconciliation loop). רץ כ-Controller בקלאסטר ומספק Dashboard, התראות, Rollback ושליטה מלאה ב-Deployments.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהן אסטרטגיות הפריסה (Deployment Strategies) השונות?",
        "a": "Rolling Update הוא ברירת המחדל ב-K8s - החלפה הדרגתית של פודים ללא downtime. Canary מעבירה אחוז קטן מהתעבורה לגרסה החדשה לבדיקה אמיתית לפני rollout מלא. Blue/Green מרימה גרסה חדשה במקביל לישנה, ולאחר ולידציה מחליפה את כל התעבורה - והיתרון הוא rollback מיידי במקרה של כשל.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר מהו StatefulSet ומתי נכון להשתמש בו בסביבת Kubernetes?",
        "a": "StatefulSet הוא בקר וורקלואד ב-Kubernetes המשמש לניהול יישומים בעלי מצב (stateful applications). הוא מבטיח זהות רציפה ויציבה לכל Pod, כולל שם רשת ויחידת אחסון יציבה, גם כאשר ה-Pod מופעל מחדש או עובר ריפוי. נשתמש בו כאשר יש צורך בסדר אתחול/כיבוי מובטח, אחסון קבוע ייחודי לכל מופע, או כשנדרשת זהות רשת ייחודית, כמו במקרה של מסדי נתונים או מערכות קבצים מבוזרות.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה ההבדל העיקרי בין Job ל-CronJob ב-Kubernetes ומתי נשתמש בכל אחד מהם?",
        "a": "Job ב-Kubernetes מיועד להרצת משימה חד-פעמית שתסתיים בהצלחה. הוא מריץ Pod אחד או יותר עד לסיום מוצלח של כל המשימות שבו. CronJob, לעומת זאת, מיועד להרצת משימות באופן מחזורי ומתוזמן, בדומה לכלי Cron במערכות הפעלה לינוקס. נשתמש ב-Job למשימות כמו קומפילציה, בדיקות או מיגרציות חד-פעמיות, וב-CronJob למשימות גיבוי, ניקוי לוגים או הפקת דוחות תקופתיים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "כיצד ConfigMap ו-Secret משמשים לניהול קונפיגורציה ונתונים רגישים ב-Kubernetes, ומה המאפיינים הייחודיים של כל אחד?",
        "a": "ConfigMap מאפשר להפריד נתוני קונפיגורציה מהקוד עצמו, ומיועד לאחסון נתונים לא רגישים כמו משתני סביבה, קבצי קונפיגורציה או ארגומנטים של שורת פקודה. הוא מספק דרך נוחה להזרים נתוני קונפיגורציה ל-Pods. Secret, לעומת זאת, מיועד לאחסון נתונים רגישים כמו סיסמאות, טוקנים של API או מפתחות SSH. הוא מאפשר אחסון מאובטח יותר על ידי קידוד Base64 כברירת מחדל, וניתן להטמיע אותו לתוך Pods כקובץ או כמשתני סביבה, תוך שמירה על רמת אבטחה גבוהה יותר בהשוואה ל-ConfigMap.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את המושג Liveness, Readiness ו-Startup Probes ב-Kubernetes ומדוע הם חשובים לבריאות היישום.",
        "a": "Liveness Probe בודק אם היישום עדיין רץ ותקין, ובמקרה של כישלון, הוא מורה ל-kubelet להפעיל מחדש את ה-Pod. Readiness Probe קובע אם ה-Pod מוכן לקבל תעבורת רשת, ורק כשהוא מצליח, ה-Pod יתווסף ל-Endpoints של ה-Service. Startup Probe מיועד ליישומים שלוקח להם זמן רב לעלות, ומונע מ-liveness ו-readiness probes להתחיל לפעול עד שה-startup probe מצליח, ובכך מונע הפעלות מחדש שאינן נחוצות. שלושתם חיוניים לשמירה על זמינות גבוהה ואמינות של יישומים על ידי ניטור רציף של מצבם ותגובה אוטומטית לכשלים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את מנגנוני ה-Taints וה-Tolerations ב-Kubernetes וכיצד הם משפיעים על תזמון Pods.",
        "a": "Taints הם דגלים שמסומנים על Node-ים ב-Kubernetes ומונעים מ-Pods מסוימים להשתבץ עליהם אלא אם כן יש להם Toleration מתאים. Tolerations מאפשרים ל-Pods 'לסבול' Taints מסוימים ולהיות מתוזמנים על Node-ים שסומנו. לדוגמה, ניתן לסמן Node שישמש רק עבור Pods עם GPUs על ידי taint, ורק Pods עם toleration מתאים יוכלו לרוץ עליו. מנגנונים אלו מאפשרים שליטה מדויקת על היכן Pods ישובצו, ומסייעים להבטיח ניצול יעיל של משאבים ולבודד עומסים ספציפיים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "כיצד RBAC (Role-Based Access Control) פועל ב-Kubernetes ומה חשיבותו באבטחת הקלאסטר?",
        "a": "RBAC ב-Kubernetes מגדיר הרשאות גישה למשאבי הקלאסטר על בסיס תפקידים. הוא משתמש ב-Roles (המגדירים סט של הרשאות בתוך Namespace ספציפי) או ClusterRoles (המגדירים הרשאות רוחביות לכל הקלאסטר). RoleBindings או ClusterRoleBindings מקשרים את ה-Roles או ClusterRoles למשתמשים, קבוצות או Service Accounts. חשיבותו באבטחת הקלאסטר היא קריטית, מכיוון שהוא מאפשר aplicar את עקרון ה-Least Privilege, כלומר לתת לכל ישות בדיוק את ההרשאות הנדרשות לה לתפקוד, ובכך להפחית את הסיכון מפעולות לא מורשות או מפגיעות אבטחה.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את החשיבות של Namespaces ב-Kubernetes ומתי נשתמש בהם בפרויקט.",
        "a": "Namespaces ב-Kubernetes הם דרך לבודד משאבים בתוך קלאסטר יחיד. הם מאפשרים לארגן אובייקטים (Pods, Deployments, Services וכו') לקבוצות לוגיות ובפרטויות, ומונעים התנגשויות שמות בין יישומים או סביבות שונות. נשתמש בהם בפרויקט כדי להפריד בין סביבות (פיתוח, בדיקות, ייצור), צוותים שונים או יישומים שונים בתוך אותו קלאסטר, מה שמקל על ניהול המשאבים, אכיפת מדיניות RBAC ותחזוקת הקלאסטר.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "תיאר כיצד Helm משמש לניהול יישומים ב-Kubernetes ומה היתרונות שלו.",
        "a": "Helm הוא מנהל חבילות (package manager) עבור Kubernetes, המאפשר לארוז, להפיץ ולנהל יישומים בצורה עקבית. הוא משתמש ב-Charts, שהם אוספים של קבצי YAML המגדירים משאבי Kubernetes, יחד עם תבניות (templates) המאפשרות התאמה אישית של הקונפיגורציה. היתרונות המרכזיים שלו כוללים הקלה על פריסה מורכבת של יישומים, אפשרות לשדרוג ושחזור גרסאות, שיתוף קונפיגורציות סטנדרטיות וניהול תלויות. הוא מפשט את תהליך ה-Deployment ומאפשר ניהול מחזור חיי היישום ב-Kubernetes בצורה יעילה ומאורגנת יותר.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו StorageClass ב-Kubernetes וכיצד הוא מאפשר ניהול אחסון דינמי (Dynamic Provisioning)?",
        "a": "StorageClass ב-Kubernetes מגדיר סוג אחסון ו-provisioner, למשל EBS, EFS או CSI driver אחר. כש-PVC מבקש storageClassName, ה-cluster יכול ליצור volume דינמית לפי parameters כמו size, reclaim policy ו-volume binding mode, במקום ליצור PV ידנית מראש.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "תאר כיצד DaemonSet עובד ב-Kubernetes, ותן דוגמה לתרחיש שבו תבחר להשתמש בו.",
        "a": "DaemonSet מבטיח שעותק אחד של ה-Pod ירוץ על כל Node בקלאסטר (או על קבוצת Nodes ספציפית). זה שימושי עבור שירותים ברמת הקלאסטר כמו לוגינג (לדוגמה, Fluentd או Filebeat), ניטור (לדוגמה, Prometheus Node Exporter), או סוכני רשת. הדבר מבטיח שכל Node מנוטרת או אוספת לוגים באופן עקבי, ללא תלות במספר ה-Pods הרגילים שרצים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "באילו מנגנונים משתמשים ב-Kubernetes כדי להשפיע על תזמון (scheduling) של Pods ל-Nodes ספציפיים? פרט לפחות שניים.",
        "a": "ב-Kubernetes ישנם מספר מנגנונים לשליטה בתזמון Pods. Affinity ו-Anti-affinity מאפשרים למשוך או לדחות Pods מ-Nodes מסוימים בהתבסס על לייבלים או Pods אחרים שכבר רצים עליהם. Node Selector הוא דרך פשוטה יותר לתזמן Pods ל-Nodes עם לייבלים תואמים. בנוסף, Taints ו-Tolerations יכולים למנוע מ-Pods מסוימים לרוץ על Nodes עם Taints, אלא אם כן יש להם Tolerations מתאימים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר מהי Network Policy ב-Kubernetes ומדוע היא חשובה לאבטחת תקשורת בין Pods.",
        "a": "Network Policy היא מפרט (Specification) המגדיר כיצד קבוצות של Pods מורשות לתקשר זו עם זו ועם ישויות רשת חיצוניות. היא מאפשרת להגביל את התעבורה בין Pods על בסיס לייבלים, Namespace ואף פורטים. הדבר חיוני ליישום עקרון ה-Least Privilege ואבטחת הקלאסטר, על ידי יצירת סגמנטציה ובידוד תקשורתי בין שירותים שונים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "כיצד עובדים PersistentVolume (PV) ו-PersistentVolumeClaim (PVC) ב-Kubernetes, ומה היתרון בהפרדה ביניהם?",
        "a": "PersistentVolume (PV) הוא משאב אחסון בקלאסטר, המופשט מהאחסון הפיזי עצמו. PersistentVolumeClaim (PVC) הוא בקשה של Pod למשאב אחסון עם מאפיינים מסוימים (גודל, מצב גישה). ההפרדה מאפשרת למפתחים לבקש אחסון מבלי להיות מודעים לפרטי התשתית, ולמנהלי קלאסטרים לספק אחסון גמיש ומנוהל, תוך ניתוק בין צרכני האחסון לספקיו.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו Resource Quota ב-Kubernetes וכיצד הוא תורם לניהול משאבים ולמניעת צריכה מופרזת ב-Namespace?",
        "a": "Resource Quota הוא אובייקט ב-Kubernetes המגדיר מגבלות צריכת משאבים עבור Namespace ספציפי. הוא יכול להגביל את מספר האובייקטים (כמו Pods, Deployments), את צריכת ה-CPU והזיכרון, ועוד. הדבר מסייע למנהלי קלאסטרים להקצות משאבים באופן הוגן בין צוותים או יישומים שונים ב-Namespace, ולמנוע מצב שבו יישום אחד צורך את כל משאבי הקלאסטר ומפריע לאחרים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את המושג Helm Chart ב-Kubernetes וכיצד הוא מפשט את תהליך הפריסה והניהול של יישומים.",
        "a": "Helm Chart הוא חבילה של קבצי Kubernetes YAML שמתארת סט של משאבים קשורים, כמו Deployments, Services, ConfigMaps, ועוד. הוא מאפשר להגדיר, להתקין ולשדרג יישומים מורכבים במלואם באופן עקבי וניתן לשחזור. Helm מספק תבניות (templates) המאפשרות התאמה אישית של ה-Chart באמצעות Values, ובכך מפשט את הפריסה ומקטין את הסיכוי לשגיאות תצורה.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו קוברנטס וכיצד הוא תורם לתהליכי פיתוח ושחרור תוכנה?",
        "a": "קוברנטס היא פלטפורמת קוד פתוח לניהול אוטומטי של קונטיינרים. היא מאפשרת פריסה, ניהול והרחבה של יישומים מבוססי קונטיינרים בצורה יעילה. קוברנטס תורמת רבות ל-DevOps על ידי פישוט תהליכי פריסה, אופטימיזציה של ניצול משאבים, והבטחת זמינות גבוהה של היישומים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר מהו Pod בקוברנטס ומדוע הוא יחידת הפריסה הבסיסית?",
        "a": "Pod בקוברנטס הוא יחידת הפריסה הקטנה ביותר שניתן לפרוס ולנהל. הוא מורכב מקונטיינר אחד או יותר שחולקים רשת ואחסון. Pod הוא יחידת הפריסה הבסיסית מכיוון שהוא מאפשר לקבץ קונטיינרים קשורים שיכולים לתקשר ביניהם באופן לוקאלי, ולהיות מנוהלים כיחידה אחת על ידי קוברנטס.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה תפקידו של Deployment בקוברנטס וכיצד הוא מבטיח זמינות גבוהה?",
        "a": "Deployment בקוברנטס הוא אובייקט המאפשר ניהול הצבה ועדכון של Pods. הוא מגדיר את מספר העותקים הרצוי של היישום ושומר על זמינות גבוהה על ידי החלפת Pods כושלים או פגומים. בנוסף, הוא מאפשר עדכונים הדרגתיים של היישום ללא השבתה, על ידי פריסת גרסאות חדשות באופן מדורג ובטוח.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר מהו Service בקוברנטס וכיצד הוא מאפשר גישה ליישומים?",
        "a": "Service בקוברנטס הוא אובייקט המאפשר גישה עקבית ויציבה ל-Pods. הוא מספק כתובת IP ופורט קבועים שדרכם ניתן לגשת ליישום, גם אם ה-Pods המשויכים אליו משתנים או נעלמים. Service מאפשר תקשורת בין רכיבים שונים בתוך הקלאסטר וכן חשיפה של יישומים מחוץ לקלאסטר.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "איך היית מתכנן multi-tenant namespaces ב-Kubernetes עבור כמה צוותי פיתוח?",
        "a": "הייתי משתמש ב-namespaces כיחידות ownership, עם RBAC, ResourceQuota, LimitRange, NetworkPolicy, admission policies, גבולות ברורים ל-secrets ו-labels סטנדרטיים. לבידוד חזק יותר הייתי מוסיף node pools, runtime policies, ובמקרים עם סיכון גבוה גם clusters נפרדים.",
        "signals": [
          "Covers RBAC, quotas, and NetworkPolicy",
          "Mentions admission control",
          "Understands namespace boundary limits"
        ]
      },
      {
        "q": "איך היית מאבחן latency גבוה של Pods בתוך cluster?",
        "a": "הייתי מפרק את ה-path: app, sidecar, Service, kube-proxy או CNI, DNS, עומס על node ותלויות חיצוניות. משווים latency בין pod-to-pod, service-to-pod ו-ingress-to-service, ואז משתמשים ב-metrics ו-traces לפני שמגיעים ל-packet capture.",
        "signals": [
          "Breaks down layers",
          "Mentions DNS and CNI",
          "Uses metrics/traces first"
        ]
      },
      {
        "q": "מה זה PodDisruptionBudget, ובאילו מצבים הוא לא באמת יגן עליך?",
        "a": "PDB מגביל voluntary disruptions בזמן drain או upgrades. הוא לא מגן מפני node crash, deployment גרוע, failures לא-רצוניים או פיזור replicas לא מספיק. PDB קשיח מדי גם יכול לחסום maintenance.",
        "signals": [
          "Differentiates voluntary and involuntary disruption",
          "Mentions replica topology",
          "Sees maintenance tradeoff"
        ]
      },
      {
        "q": "איך היית מריץ backend של tournaments ב-scale גבוה על Kubernetes עבור מיליוני שחקני מובייל?",
        "a": "הייתי משאיר request-serving services stateless, עושה להם horizontal scaling עם HPA/KEDA על metrics משמעותיים, מבודד workloads קריטיים עם node pools ו-priority classes, משתמש ב-PodDisruptionBudgets ו-topology spread constraints, ומתכנן תלויות כמו Redis, queues ו-databases כך שיתמכו בעומסי burst בלי להפיל את כל ה-flow.",
        "signals": [
          "Connects Kubernetes scaling to backend architecture",
          "Mentions traffic spikes and low latency",
          "Looks beyond pods to stateful dependencies"
        ]
      },
      {
        "q": "באילו signals של Kubernetes היית משתמש ל-autoscaling של API service מעבר ל-CPU ו-memory?",
        "a": "הייתי משתמש ב-signals קרובים יותר לעומס משתמשים: requests per second, p95 latency, queue depth, in-flight requests, worker backlog או custom business events. CPU יכול לעזור, אבל הוא לרוב lagging או מטעה עבור async workers ו-Node/Python APIs. מדד scaling טוב צריך להיות יציב, מובן, ולא לגרום ל-thrashing.",
        "signals": [
          "Mentions custom metrics and KEDA/HPA style scaling",
          "Understands CPU is not always the right signal",
          "Considers downstream capacity and scale limits"
        ]
      }
    ]
  },
  {
    "subject": "CI/CD",
    "icon": "CI",
    "items": [
      {
        "q": "ביצעתי שינוי ב-Git, ה-Pipeline רץ ויש תקלה בפרודקשן - מה עושים?",
        "a": "מבצעים Rollback מיידי. עם Helm: helm rollback לגרסה תקינה קודמת. עם Deployment של K8s: kubectl rollout undo. K8s שומר היסטוריית ReplicaSets (kubectl rollout history) ומאפשר חזרה מהירה. רק אחרי שהמערכת יציבה חוקרים את שורש התקלה ב-post-mortem ומתקנים בקוד.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "האם צריך ב-CI/CD לתייג latest ולדחוף ל-Registry?",
        "a": "כן, מתייגים גם latest וגם tag ייעודי לגרסה (semver או commit SHA). חשוב להבין: latest הוא לא 'הגרסה האחרונה' באמת אלא תיוג שעובר ל-image האחרון שתויג ככה. תיוג גרסה מדויק קריטי כדי לאפשר rollback אמיתי ולדעת בדיוק מה רץ בפרודקשן.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה זה Unit Test?",
        "a": "Unit Test הוא בדיקה של יחידת הקוד הקטנה ביותר - בדרך כלל פונקציה אחת - שמטרתה לוודא שהלוגיקה הבסיסית עובדת. הבדיקות רצות לפני ה-build כשער איכות ראשון, ואם הן נכשלות ה-pipeline נעצר. אחרי build אפשר להריץ בדיקות אינטגרציה ו-API שנקראות Dynamic Tests.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "איך כותבים pipeline משותף למספר repos ב-GitLab CI?",
        "a": "יוצרים repository מרכזי שמכיל את ה-.gitlab-ci.yml המשותף. בכל repo בודד מוסיפים .gitlab-ci.yml קצר עם הוראת include שמייבאת את ה-pipeline המרכזי. ככה משתמשים באותו pipeline לכל הפרויקטים, ועדיין אפשר להוסיף שלבים ייחודיים לכל repo במידת הצורך.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "איך כלי CI/CD מתחברים ל-Kubernetes?",
        "a": "ב-GitLab מתקינים GitLab Agent בקלאסטר באמצעות Helm - ה-agent מאפשר deploy ואינטראקציה עם המשאבים בצורה מאובטחת. ב-Jenkins משתמשים ב-plugin שמתחבר עם kubeconfig, ה-agent כולל kubectl ל-apply, ויש Kubernetes plugin שמריץ Jenkins agents כפודים בתוך הקלאסטר עצמו.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "אילו סוגי Tests קיימים בתהליך CI/CD?",
        "a": "Unit Tests בודקים פונקציות בודדות. Integration Tests בודקים תקשורת בין רכיבים (למשל DB ואפליקציה). API Tests בודקים את הפונקציונליות של ה-API. DAST הן בדיקות אבטחה דינמיות בזמן ריצה ו-SAST הן סריקת קוד סטטית. Performance/Load בודקות התנהגות תחת עומס, ו-E2E בודקות זרימה שלמה מהמשתמש עד ה-DB.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "איך מבצעים CI לשפה מקומפלת כמו C/C++?",
        "a": "מקמפלים בתוך Dockerfile עם base image מתאים (gcc) ופקודות g++. עדיף multi-stage build: שלב builder עם הקומפיילר וכלי הבנייה, ואז העתקה של הבינארי בלבד ל-image קטן ונקי. כך מקבלים סביבת בנייה עקבית, image סופי קל ומנצלים Docker layer cache להאצת ה-build.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו המבנה של Jenkins?",
        "a": "Jenkins פועל במודל Master/Agents. ה-Master (Controller) אחראי על ניהול משימות, scheduling, UI, היסטוריית builds ושמירת artifacts. ה-Agents (Slaves) הם אלו שמבצעים בפועל את ה-build, deploy ובדיקות. ה-Master מחלק עבודה ל-agents הזמינים ומנטר אותם, וכך מתאפשרת הרצה מקבילית ובסקייל.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו תפקידו של קובץ Jenkinsfile ב-Jenkins, וכיצד הוא תורם ל-'Pipeline as Code'?",
        "a": "קובץ Jenkinsfile מגדיר את ה-CI/CD pipeline באמצעות קוד, לרוב ב-Groovy, ומאוחסן במערכת ניהול גרסאות (SCM) יחד עם קוד הפרויקט. גישה זו, הידועה גם כ-'Pipeline as Code', מאפשרת ניהול גרסאות, ביקורת ועקביות בתהליך ה-build והפריסה. הוא מאפשר לשחזר pipeline בכל רגע נתון ולטפל בו כחלק אינטגרלי מהפרויקט. ה-Jenkinsfile תומך בשני סוגי תחביר עיקריים: Declarative ו-Scripted.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר כיצד GitLab CI/CD עובד ומהם היתרונות בשימוש בו בהשוואה לכלי CI/CD חיצוניים?",
        "a": "GitLab CI/CD הוא חלק אינטגרלי מ-GitLab, המאפשר בנייה, בדיקה ופריסה של קוד ישירות מתוך הממשק. הוא מוגדר באמצעות קובץ .gitlab-ci.yml בבסיס ה-repository, המגדיר את השלבים והמשימות. היתרון המרכזי הוא האינטגרציה ההדוקה עם ניהול הקוד, ניהול המשתמשים וה-issues, מה שיוצר חוויה אחידה ומפשט את תהליכי הפיתוח וה-DevOps. זה מונע צורך בכלי צד שלישי ובניהול הרשאות נפרד, ומספק נראות מלאה לכל שלבי ה-pipeline.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהי אסטרטגיית branching מומלצת בסביבת CI/CD, וכיצד היא משפיעה על יעילות הפיתוח והפריסה?",
        "a": "אסטרטגיית branching נפוצה היא GitFlow או Trunk-Based Development. ב-Trunk-Based Development, כל המפתחים מבצעים אינטגרציה רציפה לענף הראשי (trunk), מה שמקדם פיתוח מהיר ותדיר, תוך שמירה על ענף ראשי יציב תמיד. הדבר מאפשר זיהוי מוקדם של בעיות אינטגרציה (fail-fast) ומפשט את תהליך ה-merging. ב-GitFlow, לעומת זאת, ישנם ענפים ייעודיים לפיצ'רים, שחרורים ותיקוני באגים. הבחירה באסטרטגיה הנכונה תלויה בגודל הצוות, תדירות השחרורים ובמורכבות הפרויקט.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "כיצד מטפלים ב-secrets (כמו credentials או API keys) ב-CI/CD pipeline באופן מאובטח, ומהן הגישות השונות?",
        "a": "טיפול מאובטח ב-secrets הוא קריטי למניעת חשיפת מידע רגיש. גישות נפוצות כוללות שימוש בכלים ייעודיים כמו HashiCorp Vault, AWS Secrets Manager, או יכולות מובנות בפלטפורמת ה-CI/CD דוגמת GitLab CI/CD Variables Protected או GitHub Actions Secrets. הגישה המקובלת היא להצפין את ה-secrets ולאחסן אותם באופן מופרד מהקוד, ולהזריק אותם ל-pipeline רק בעת הצורך. בנוסף, יש להשתמש בעקרון ה-least privilege ולהבטיח שה-secrets נגישים רק למי שבאמת צריך אותם ולזמן המינימלי הנדרש.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את המושג 'artifacts' ב-CI/CD pipeline ומה חשיבותם בתהליך הבנייה והפריסה.",
        "a": "Artifacts הם קבצים או תיקיות שנוצרים כתוצאה מהרצת שלב ב-CI/CD pipeline, לדוגמה קובץ WAR, Docker image, קובץ בינארי או דוחות בדיקה. הם מהווים את התוצרים של ה-build ומשמשים כקלט לשלבים הבאים ב-pipeline, למשל שלב בדיקות או פריסה. שמירה על artifacts בצורה מסודרת ועם ניהול גרסאות תקין מבטיחה עקביות בין הסביבות השונות. קיום artifacts זמין מאפשר גם לחזור לגרסאות קודמות בקלות ולבצע debugging יעיל.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו caching ב-CI/CD, ומדוע הוא חשוב לשיפור ביצועי ה-pipeline?",
        "a": "Caching ב-CI/CD מאפשר לשמור תוצרי ביניים או תלויות של פרויקט (dependencies), כגון חבילות Node.js (node_modules) או קבצים מהודרים, בין הרצות שונות של ה-pipeline. במקום להוריד או לבנות אותם מחדש בכל פעם, ה-cache נטען ומקצר משמעותית את זמן הביצוע של ה-pipeline. זה משפר את היעילות, מפחית את צריכת המשאבים ומזרז את תהליך ה-feedback למפתחים. ה-cache מוגדר בדרך כלל באמצעות מפתח (key) ותלוי בשינויים בקבצים מסוימים, כך שאם הקבצים משתנים, ה-cache יבנה מחדש.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר כיצד ניתן לממש 'manual approval gates' ב-CI/CD pipeline ומתי כדאי להשתמש בהם.",
        "a": "Manual approval gates הם נקודות ב-CI/CD pipeline הדורשות אישור אנושי לפני מעבר לשלב הבא. לרוב, הם מיושמים לפני פריסה לסביבות קריטיות כמו Staging או Production. בממשקי CI/CD כמו Jenkins, GitLab CI/CD או GitHub Actions, ניתן להגדיר שלב מסוים כתלוי באישור ידני. מומלץ להשתמש בהם כאשר נדרשת בדיקה אנושית נוספת, אישור רגולטורי, או לצורך בקרת איכות קפדנית, על מנת למנוע פריסות לא רצויות או שגויות. שערים אלו מוסיפים שכבת הגנה חשובה לתהליך הפריסה.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהן 'matrix builds' או 'parallel jobs' ב-CI/CD, וכיצד הן תורמות לאופטימיזציה של זמן ה-pipeline?",
        "a": "Matrix builds או parallel jobs מאפשרות להריץ מספר משימות או שלבים ב-CI/CD pipeline בו זמנית, במקום ברצף. לדוגמה, ניתן להריץ בדיקות או לבנות את הפרויקט על פני מספר גרסאות של מערכת הפעלה, שפות תכנות או תלות תוכנה שונות במקביל. זה מקצר באופן משמעותי את זמן הריצה הכולל של ה-pipeline. זה מאפשר ביצוע בדיקות מהיר יותר על מגוון רחב של תצורות, ומסייע בזיהוי מוקדם של בעיות. פלטפורמות כמו Jenkins, GitHub Actions ו-GitLab CI/CD תומכות רחבה ביכולות אלו.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את המושגים 'semantic versioning' ו-'tagging' בהקשר של CI/CD, וכיצד הם קשורים זה לזה.",
        "a": "Semantic versioning (semver) היא שיטת מתן מספרי גרסה לתוכנה בפורמט MAJOR.MINOR.PATCH (לדוגמה: 1.2.3). MAJOR מציין שינויים לא תואמים לאחור, MINOR שינויים תואמים לאחור, ו-PATCH תיקוני באגים תואמים לאחור. Tagging ב-CI/CD, לעומת זאת, הוא תיוג ספציפי של נקודה ב-Git history, לרוב כדי לסמן גרסת שחרור. ה-CI/CD pipeline יכול להשתמש ב-tags אלו כדי לייצר artifacts תואמים לגרסה, לבנות Docker images עם ה-tag המתאים ולנהל את השחרורים בצורה מסודרת. השילוב של שניהם מבטיח עקביות, נוחות בזיהוי גרסאות ומאפשר rollback קל.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו העיקרון של 'fail-fast' ב-CI/CD pipeline, ומדוע הוא כה חשוב לפיתוח תוכנה?",
        "a": "העיקרון של 'fail-fast' ב-CI/CD מדגיש את החשיבות בזיהוי כשלים בתהליך מוקדם ככל האפשר. במקום לאפשר ל-pipeline להמשיך להריץ שלבים רבים לאחר כשל קריטי, העיקרון קורא לעצור את ה-pipeline מיד עם זיהוי הבעיה. לדוגמה, אם בדיקות יחידה נכשלות, אין טעם להמשיך לבנות את ה-Docker image או לפרוס את הקוד. היתרון הוא חיסכון בזמן ובמשאבים, ומתן משוב מהיר למפתחים. זה מאפשר תיקון מהיר יותר של הבאגים ומשפר את איכות הקוד על ידי מניעת הצטברות בעיות.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר מהם GitHub Actions וכיצד הם מאפשרים אוטומציה של תהליכי עבודה ישירות ב-GitHub. פרט את היתרונות המרכזיים של השימוש בהם לעומת פתרונות CI/CD אחרים.",
        "a": "GitHub Actions היא פלטפורמת CI/CD מובנית בתוך GitHub המאפשרת אוטומציה של תהליכי פיתוח, בדיקה ופריסה. היא מבוססת על אירועים (events) המתרחשים במאגר (repository), כמו push או pull request. היתרונות המרכזיים שלה כוללים אינטגרציה חלקה עם GitHub, קהילה גדולה של פעולות מוגדרות מראש (actions), ומודל תשלום גמיש המבוסס על שימוש. היא מאפשרת הגדרת workflow באמצעות קובצי YAML, ובכך מספקת גמישות ושליטה מלאה על תהליכי האוטומציה.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו תפקידם של 'manual approval gates' ב-CI/CD pipeline ומתי כדאי להשתמש בהם? תאר דוגמה מעשית שבהם שער אישור ידני יהיה הכרחי.",
        "a": "Manual approval gates הם נקודות ב-CI/CD pipeline שבהן נדרשת התערבות או אישור ידני לפני שה-pipeline ממשיך. הם משמשים בדרך כלל לשלבים קריטיים כמו פריסה לסביבת ייצור (production) או אישור גרסה על ידי צוות QA. דוגמה מעשית תהיה פריסת עדכון משמעותי לאפליקציה בנק שבו נדרש אישור של מנהל צוות או צוות אבטחה לאחר בדיקות אוטומטיות, כדי לוודא שכל ההיבטים הרגולטוריים והאבטחתיים מולאו. שערים אלו מבטיחים בקרה נוספת ומונעים פריסות שעלולות לגרום לנזק.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו CI/CD ומהם יתרונותיו המרכזיים?",
        "a": "CI/CD (Continuous Integration/Continuous Delivery) היא מתודולוגיה המשלבת אוטומציה בתהליכי הפיתוח והשחרור של תוכנה. יתרונותיה המרכזיים כוללים זיהוי מהיר של באגים, קיצור זמני שחרור תוכנה, אמינות גבוהה יותר של שחרורים, שיפור שיתוף הפעולה בין צוותי פיתוח ותפעול, והורדת הסיכון בעת השחרורים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את ההבדל בין Continuous Integration ל-Continuous Delivery.",
        "a": "Continuous Integration (CI) מתמקד בשילוב קוד באופן תדיר למאגר מרכזי, ובדיקות אוטומטיות מהירות לוודא שהקוד תקין. Continuous Delivery (CD) מרחיב את ה-CI ומבטיח שהתוכנה תמיד מוכנה לפריסה לסביבת PRODUCTION, על ידי אוטומציה של תהליך השחרור והבדיקות הסופיות. המטרה היא שכל פיצ'ר או תיקון יהיו מוכנים לפריסה בכל עת.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה תפקידו של Pipeline ב-CI/CD ומהם השלבים הנפוצים?",
        "a": "Pipeline ב-CI/CD הוא רצף מוגדר מראש של שלבים אוטומטיים, המבצעים פעולות שונות על הקוד מהרגע שהוא נדחף למאגר ועד לפריסתו. שלבים נפוצים כוללים: Build (קומפילציה), Test (הרצת בדיקות יחידה/אינטגרציה), Static Code Analysis, Package (אריזת היישום), Deploy (פריסה לסביבת בדיקות/ייצור) ו-Monitoring.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "כיצד אוטומציה תורמת ליעילות ובטיחות ב-CI/CD?",
        "a": "אוטומציה ב-CI/CD תורמת ליעילות על ידי ביצוע מהיר ועקבי של משימות חוזרות ונשנות, ומשחררת את המפתחים להתמקד בכתיבת קוד. היא תורמת לבטיחות על ידי הפחתת טעויות אנוש, אכיפת סטנדרטים אחידים בכל התהליך, וביצוע בדיקות קפדניות בכל שינוי קוד, מה שמבטיח איכות ויציבות גבוהה יותר של התוכנה.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "איך היית מאבטח מערכת CI?",
        "a": "מצמצמים secrets, מבודדים runners, מקבעים versions של actions ו-images, משתמשים ב-OIDC credentials קצרי חיים, מגבילים privileged jobs, מגנים על branches, ומוודאים ש-pull requests לא מהימנים לא מקבלים production credentials.",
        "signals": [
          "Treats CI as a production attack surface",
          "Mentions OIDC over static keys",
          "Covers third-party actions and runners"
        ]
      },
      {
        "q": "מה הופך rollback של deployment לאמין?",
        "a": "ה-artifact הישן חייב עדיין להיות זמין, config צריך להיות versioned, database changes חייבים להיות backward compatible, ו-monitoring צריך לזהות release גרוע מהר. Rollback צריך להיות מתורגל כחלק מתהליך release ולא להישאר תאוריה.",
        "signals": [
          "Mentions schema compatibility",
          "Includes config and artifacts",
          "Tests rollback paths"
        ]
      },
      {
        "q": "איך היית משתמש ב-Argo Rollouts כדי לבצע releases בטוחים ל-production?",
        "a": "הייתי משתמש ב-Argo Rollouts ל-canary או blue-green deployments עם traffic shifting מבוקר, automated metric analysis ו-abort/rollback מהיר. Setup בכיר מגדיר success metrics כמו error rate, latency, saturation ו-business KPIs, ומתחבר ל-ingress או service mesh כך שרק users אמיתיים בכמות מדודה נחשפים לגרסה החדשה.",
        "signals": [
          "Explains canary or blue-green with traffic shifting",
          "Mentions AnalysisTemplates and metrics",
          "Connects rollout safety to schema/API compatibility"
        ]
      },
      {
        "q": "Canary release עבר health checks, אבל פעולות שמשפיעות על revenue מתחילות להיכשל. איך מערכת ה-rollout צריכה לזהות את זה?",
        "a": "Health checks רק מוכיחים שהתהליך חי. בפלטפורמת gaming, rollout analysis צריך לכלול business ו-user-flow metrics כמו failures ב-join ל-tournament, payment/session errors, matchmaking failures ו-p95 latency לפי version. אם המדדים האלה יורדים מתחת לסף, ה-Rollout צריך לעצור או לעשות rollback גם אם probes ירוקים.",
        "signals": [
          "Uses product/business SLIs, not just pod health",
          "Segments metrics by version",
          "Mentions automated pause/abort"
        ]
      },
      {
        "q": "Pipeline נכשל בשלב build. מה תבדוק קודם?",
        "a": "קודם מזהים אם הכשל הוא בקוד, בתלויות, בסביבת ה-runner או בקונפיגורציית ה-pipeline. בודקים את הלוג הראשון שבו מופיעה השגיאה האמיתית, את הפקודה שנכשלה, exit code, branch/commit, שינויים אחרונים בקבצי build או pipeline, זמינות dependencies וגרסת runtime. לא מתחילים לשנות דברים לפני שמבינים איזה שלב נכשל ולמה.",
        "signals": [
          "Starts from logs and failed command",
          "Separates code, dependency, runner, and pipeline config causes",
          "Checks recent changes before guessing"
        ]
      },
      {
        "q": "Tests עוברים אצל המפתח אבל נכשלים ב-CI. מה יכול להסביר את זה?",
        "a": "פער בין סביבת הפיתוח ל-CI: גרסת Java/Python שונה, dependencies לא נעולות, environment variables חסרים, working directory שונה, timezone/locale, קבצים שלא נכנסו ל-Git, סדר ריצה שונה או test שתלוי ב-state קודם. בודקים את סביבת ה-CI מול local, מריצים את אותה פקודה בדיוק, ומנסים לשחזר בתוך container או runner דומה.",
        "signals": [
          "Looks for environment drift",
          "Mentions missing env vars or uncommitted files",
          "Reproduces with the same command/runtime"
        ]
      },
      {
        "q": "Deployment הסתיים בהצלחה אבל השירות לא עובד בסביבת test. מה תבדוק?",
        "a": "מוודאים שהגרסה הנכונה נפרסה, שה-artifact קיים ותואם ל-commit, שה-service/process רץ, שה-config וה-environment variables נכונים, שהפורטים והרשת פתוחים, ושאין שגיאות בלוגים בזמן startup. אחר כך מריצים smoke test פשוט ובודקים האם הבעיה היא deployment, config, dependency חיצונית או באג באפליקציה.",
        "signals": [
          "Verifies deployed version and artifact",
          "Checks runtime, config, network, and logs",
          "Uses smoke test to narrow the failure"
        ]
      },
      {
        "q": "Java build נכשל כי dependency לא נמצא. איך תחקור?",
        "a": "בודקים את הודעת Maven/Gradle המדויקת, שם ה-dependency והגרסה, האם repository מוגדר נכון, האם יש גישה לרשת או ל-artifact repository, האם credentials חסרים, והאם ה-dependency קיים בגרסה המבוקשת. אם זה עבד בעבר, בודקים שינוי ב-pom/build.gradle, cache שנשבר, או בעיה זמנית ב-repository.",
        "signals": [
          "Reads the dependency name/version from the error",
          "Checks repository, network, credentials, and cache",
          "Compares with recent build file changes"
        ]
      },
      {
        "q": "שלב deploy לא מוצא את ה-artifact שנבנה קודם. מה יכול להיות לא נכון?",
        "a": "יכול להיות שה-artifact נשמר בשם או נתיב שונה, לא הוגדר כ-artifact/output של ה-job, expired לפני שלב deploy, נבנה ב-job אחר בלי dependency נכון, או שה-deploy מחפש גרסה/tag לא תואמים. בודקים את output של שלב build, הגדרות artifacts/cache, dependencies בין jobs, ושיטת versioning.",
        "signals": [
          "Knows artifacts must be passed between jobs explicitly",
          "Checks path/name/version mismatch",
          "Distinguishes cache from build artifact"
        ]
      },
      {
        "q": "איך תדווח למפתח על כשל ב-CI בצורה שעוזרת לו לפתור מהר?",
        "a": "שולחים מידע מדויק וקצר: שם ה-pipeline וה-job, branch/commit, השלב שנכשל, השגיאה המרכזית מהלוג, קישור להרצה, האם הכשל חוזר או חד-פעמי, ומה כבר נבדק. אם נראה שזה קשור לקוד, מציינים למה; אם נראה תשתיתי, לוקחים ownership ולא זורקים את זה למפתח.",
        "signals": [
          "Includes actionable CI context",
          "Separates code failure from infrastructure failure",
          "Communicates clearly without log dumping"
        ]
      }
    ]
  },
  {
    "subject": "Java Build & Runtime",
    "icon": "JV",
    "items": [
      {
        "q": "מה קורה בדרך כלל ב-Java build pipeline?",
        "a": "Pipeline בסיסי ל-Java מושך קוד, מתקין או משתמש ב-JDK מתאים, מוריד dependencies דרך Maven או Gradle, מקמפל את הקוד, מריץ unit tests, אורז artifact כמו JAR או WAR, שומר אותו ב-artifact repository או כ-output של ה-pipeline, ואז משתמש בו בשלבי בדיקה או deployment.",
        "signals": [
          "Mentions JDK, dependencies, compile, tests, and packaging",
          "Knows JAR/WAR are build outputs",
          "Connects artifact to later pipeline stages"
        ]
      },
      {
        "q": "מה ההבדל בין Maven ל-Gradle ברמה שימושית ל-DevOps?",
        "a": "שניהם כלי build וניהול dependencies ל-Java. Maven מבוסס לרוב על pom.xml ומודל lifecycle סטנדרטי כמו validate, compile, test, package. Gradle משתמש לרוב ב-build.gradle ונותן יותר גמישות וסקריפטביליות. ל-DevOps חשוב לדעת להריץ build/test/package, להבין איפה מוגדרות dependencies, ואיך cache או repository משפיעים על build.",
        "signals": [
          "Explains both as build/dependency tools",
          "Mentions pom.xml and build.gradle",
          "Focuses on practical pipeline commands"
        ]
      },
      {
        "q": "מה תבדוק כש-Java application לא עולה אחרי deployment?",
        "a": "בודקים logs ו-stack trace, גרסת JDK, פקודת ההרצה, classpath או JAR path, environment variables, קבצי config, הרשאות לקבצים, פורט תפוס, וזמינות dependencies כמו DB או API חיצוני. חשוב להבדיל בין בעיית startup של האפליקציה לבין בעיית routing או health check.",
        "signals": [
          "Starts with logs and stack trace",
          "Checks runtime config and dependencies",
          "Separates app startup from connectivity"
        ]
      },
      {
        "q": "מה ההבדל בין compile error ל-runtime error ב-Java?",
        "a": "Compile error קורה בזמן build כשהקוד לא יכול להפוך ל-bytecode, למשל syntax error או class חסר בזמן קומפילציה. Runtime error קורה כשהאפליקציה כבר רצה, למשל NullPointerException, קונפיגורציה חסרה או חיבור DB שנכשל. ב-CI compile error יעצור את build, ו-runtime error יתגלה לרוב בהרצה, smoke test או logs.",
        "signals": [
          "Separates build-time from run-time failures",
          "Gives practical examples",
          "Connects failure type to pipeline stage"
        ]
      },
      {
        "q": "איך היית מסביר JAR לעומת WAR בהקשר deployment?",
        "a": "JAR משמש לרוב לאפליקציה עצמאית או ספרייה, וב-Spring Boot למשל אפשר להריץ אותו ישירות עם java -jar. WAR מיועד לאפליקציית web שרצה בתוך application server או servlet container כמו Tomcat. ב-deployment צריך לדעת איזה artifact נוצר, מי מריץ אותו, ואיפה נמצאים config ו-logs.",
        "signals": [
          "Knows JAR can be runnable",
          "Knows WAR targets a web container",
          "Connects artifact type to deployment method"
        ]
      }
    ]
  },
  {
    "subject": "Deployment Automation",
    "icon": "DA",
    "items": [
      {
        "q": "איך נראה תהליך deployment אוטומטי פשוט מסביבת dev ל-test?",
        "a": "אחרי merge או trigger ידני, ה-pipeline בונה artifact, מריץ בדיקות בסיסיות, מפרסם את ה-artifact עם version ברור, מעדכן את סביבת test, מזריק config מתאים לסביבה, מריץ smoke tests, ושומר לוגים ותוצאת deployment. המטרה היא שכל הרצה תהיה שחזורית ולא תלויה בצעדים ידניים.",
        "signals": [
          "Includes build, test, publish, deploy, and smoke test",
          "Mentions environment-specific config",
          "Emphasizes repeatability"
        ]
      },
      {
        "q": "מה חשוב לשמור נפרד בין קוד לבין configuration בסביבות שונות?",
        "a": "אותו artifact צריך לרוץ בכמה סביבות, אבל config כמו URLs, credentials, feature flags, log level ו-resource limits משתנה בין dev, test ו-production. הפרדה כזו מונעת build שונה לכל סביבה, מקלה על rollback, ומצמצמת טעויות כמו hardcoded endpoint או secret בקוד.",
        "signals": [
          "Understands same artifact across environments",
          "Lists practical config examples",
          "Mentions rollback and secret safety"
        ]
      },
      {
        "q": "מה זה smoke test אחרי deployment ולמה הוא חשוב?",
        "a": "Smoke test הוא בדיקה קצרה שמוודאת שהשירות חי ועושה פעולה בסיסית אחרי deployment: endpoint עונה, login בסיסי עובד, או job מרכזי מתחיל לרוץ. הוא לא מחליף בדיקות מלאות, אבל נותן feedback מהיר שה-deployment לא שבר משהו בסיסי בסביבה.",
        "signals": [
          "Defines smoke test as quick post-deploy validation",
          "Gives concrete examples",
          "Does not confuse it with full regression testing"
        ]
      },
      {
        "q": "מה הופך release script לאמין?",
        "a": "Release script אמין הוא idempotent ככל האפשר, נכשל עם exit code ברור, כותב logs שימושיים, בודק prerequisites לפני שינוי, משתמש בגרסאות מפורשות, לא מסתיר errors, ותומך ב-dry-run כשיש סיכון. הוא גם מתועד כך שאדם אחר בצוות יכול להריץ או להבין אותו.",
        "signals": [
          "Mentions idempotency and explicit versions",
          "Covers logs, exit codes, and prerequisites",
          "Considers dry-run for risky actions"
        ]
      },
      {
        "q": "אם deployment נכשל באמצע, מה הצעדים הראשונים?",
        "a": "עוצרים פעולות המשך, מבינים איזה שלב נכשל ומה כבר השתנה, בודקים האם השירות במצב תקין או חלקי, מחליטים אם rollback נדרש, ושומרים את הלוגים והגרסאות לצורך חקירה. לא מריצים שוב אוטומציה עיוורת לפני שמבינים אם היא בטוחה להרצה חוזרת.",
        "signals": [
          "Checks partial state before retrying",
          "Preserves logs and version context",
          "Considers rollback based on impact"
        ]
      }
    ]
  },
  {
    "subject": "Testing & QA Flow",
    "icon": "QA",
    "items": [
      {
        "q": "איפה נכון לשים unit tests, integration tests ו-smoke tests ב-pipeline?",
        "a": "Unit tests רצים מוקדם כי הם מהירים ונותנים feedback על לוגיקה. Integration tests רצים אחרי שיש build או סביבת בדיקה מתאימה, כי הם בודקים חיבור בין רכיבים. Smoke tests רצים אחרי deployment לסביבה כדי לוודא שהשירות באמת חי ועובד בסיסית. ככל שהבדיקה יקרה או איטית יותר, שמים אותה מאוחר יותר.",
        "signals": [
          "Orders tests by speed and dependency",
          "Connects smoke tests to deployed environment",
          "Explains why pipeline stages differ"
        ]
      },
      {
        "q": "מה ההבדל בין test failure אמיתי לבין flaky test?",
        "a": "Test failure אמיתי נכשל בצורה עקבית בגלל שינוי בקוד או בסביבה. Flaky test נכשל לסירוגין בגלל timing, תלות בסדר הרצה, רשת, נתונים משותפים, race condition או resource איטי. לא מתעלמים מ-flaky tests; מסמנים, חוקרים ומתקנים כי הם הורסים אמון ב-pipeline.",
        "signals": [
          "Defines flaky behavior",
          "Lists common causes",
          "Treats flakiness as a real quality issue"
        ]
      },
      {
        "q": "איך DevOps צריך לעבוד עם QA סביב deployment לסביבת test?",
        "a": "DevOps צריך לספק סביבת test יציבה, deployment repeatable, גרסה ברורה של מה נפרס, קישורים ללוגים ותוצאות pipeline, ודרך פשוטה ל-QA לדעת אם הסביבה מוכנה לבדיקה. כשיש כשל, חשוב להבהיר אם הוא deployment/config או באג באפליקציה.",
        "signals": [
          "Focuses on environment readiness",
          "Mentions version visibility and logs",
          "Clarifies ownership of failures"
        ]
      },
      {
        "q": "מה תעשה אם QA מדווח שסביבת test שבורה אחרי deployment?",
        "a": "מבקשים reproduction קצר ו-impact, בודקים איזו גרסה נפרסה ומתי התחיל הכשל, מריצים smoke test, קוראים logs, ומשווים לשינוי האחרון בקוד/config/deployment. אם הסביבה חסומה ל-QA, קודם מחזירים אותה למצב עובד או עושים rollback, ואז חוקרים שורש תקלה.",
        "signals": [
          "Asks for reproducible signal",
          "Checks version, timing, logs, and config",
          "Prioritizes unblocking QA"
        ]
      },
      {
        "q": "מה זה quality gate ב-CI/CD?",
        "a": "Quality gate הוא תנאי שחייב לעבור לפני שה-pipeline ממשיך, למשל unit tests ירוקים, code coverage מינימלי, static analysis בלי בעיות קריטיות, build artifact תקין או approval לפני deployment. Gate טוב מונע מעבר של גרסה מסוכנת אבל לא צריך להיות איטי או רועש מדי.",
        "signals": [
          "Defines gate as a promotion condition",
          "Gives practical examples",
          "Balances safety and pipeline speed"
        ]
      }
    ]
  },
  {
    "subject": "Teamwork / Workflows",
    "icon": "TW",
    "items": [
      {
        "q": "איך תעבוד עם מפתח שמבקש עזרה כי ה-pipeline שלו נכשל?",
        "a": "קודם מבינים מה השתנה ומה בדיוק נכשל: branch, commit, job, error מרכזי והאם זה משתחזר. אם הבעיה בקוד או test, נותנים למפתח מידע מדויק. אם הבעיה בתשתית CI, runner, credentials או deployment, לוקחים ownership ומעדכנים אותו בזמן. המטרה היא לפתור ולא להעביר אשמה.",
        "signals": [
          "Collects specific context",
          "Separates developer-owned and DevOps-owned issues",
          "Communicates without blame"
        ]
      },
      {
        "q": "איזה מידע צריך לכלול ticket טוב עבור DevOps automation task?",
        "a": "Ticket טוב כולל מטרה, current pain, expected outcome, repository/service רלוונטי, סביבה, constraints, דוגמה לקלט/פלט אם יש, definition of done, ועדיפות. אם חסר מידע קריטי, שואלים מוקדם במקום לבנות אוטומציה על הנחות.",
        "signals": [
          "Mentions goal and definition of done",
          "Includes repo/service/environment context",
          "Asks clarifying questions early"
        ]
      },
      {
        "q": "איך תעדכן צוות כשיש תקלה שחוסמת deployment?",
        "a": "נותנים עדכון קצר וברור: מה נשבר, מי מושפע, מה נבדק, מה הצעד הבא, ומתי יהיה עדכון נוסף. אם אין root cause עדיין, אומרים זאת במפורש. בזמן תקלה עדיף communication עקבי ומדויק על פני השערות ארוכות.",
        "signals": [
          "Communicates impact and next step",
          "Avoids speculative root cause",
          "Sets expectation for follow-up"
        ]
      },
      {
        "q": "איך תתעד אוטומציה חדשה כדי שאחרים יוכלו להשתמש בה?",
        "a": "מתעדים מה הכלי עושה, מתי להשתמש בו, prerequisites, פקודת הרצה, parameters חשובים, דוגמה להרצה תקינה, errors נפוצים ואיך לעשות rollback או cleanup אם יש שינוי בסביבה. תיעוד טוב חוסך תלות באדם אחד ומקטין טעויות תפעוליות.",
        "signals": [
          "Covers usage, prerequisites, and examples",
          "Includes common errors and cleanup",
          "Thinks about team handoff"
        ]
      },
      {
        "q": "מה תעשה אם קיבלת משימה לא ברורה כמו 'תעשה אוטומציה ל-deployment'?",
        "a": "מפרקים את הבקשה לשאלות: איזה service, אילו סביבות, מה ה-trigger, מה נחשב הצלחה, אילו בדיקות צריכות לרוץ, מי מאשר deployment, איך עושים rollback, ואילו מגבלות אבטחה קיימות. אחרי שמבהירים scope, מציעים פתרון קטן שעובד ומרחיבים בהדרגה.",
        "signals": [
          "Clarifies scope before implementation",
          "Asks about environments, triggers, tests, and rollback",
          "Prefers incremental delivery"
        ]
      }
    ]
  },
  {
    "subject": "Cloud / AWS",
    "icon": "CL",
    "items": [
      {
        "q": "מהו היתרון המרכזי בשימוש בשרתים וירטואליים מסוג EC2 לעומת שרתים פיזיים בפרויקט DevOps?",
        "a": "היתרון המרכזי של EC2 הוא הגמישות והסקיילביליות. ניתן להקצות ולשחרר משאבים במהירות וביעילות, מה שמאפשר התאמה לשינויים בעומסים וצרכים. בנוסף, מודל התשלום לפי שימוש (Pay-as-you-go) מאפשר חיסכון בעלויות תפעול. זה מקל על הקמה ובדיקה של סביבות חדשות וניהול מחזור החיים של אפליקציות.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את ההבדל בין קלאס אחסון Standard ל- Glacier ב- S3 ומתי נכון להשתמש בכל אחד מהם.",
        "a": "Standard S3 מתאים לאחסון אובייקטים הנדרשים לגישה תכופה ומהירה, כמו קבצי ווב או דאטה של אפליקציות. לעומתו, Glacier מיועד לאחסון ארכיוני לטווח ארוך עם עלות נמוכה מאוד, אך עם זמני שליפה איטיים יותר. השימוש ב-Glacier מתאים לנתונים שאין צורך לגשת אליהם באופן מיידי ורציף, כמו גיבויים היסטוריים או נתונים לצרכי תאימות רגולטורית.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "תאר כיצד AWS IAM מאפשר ניהול זהויות והרשאות בבטחה בסביבת ענן.",
        "a": "IAM מאפשר יצירה וניהול של משתמשים (Users), קבוצות (Groups) ותפקידים (Roles), וכן הגדרת מדיניות (Policies) המפרטות אילו פעולות ומשאבים מותרים או אסורים. זה מאפשר שליטה גרנולרית על הגישה לשירותי AWS ומבטיח שרק לגורמים מורשים תהיה גישה למה שהם צריכים, ובכך מקטין את הסיכון האבטחתי. לדוגמה, ניתן להגדיר Roles עבור EC2 instances כדי שיוכלו לגשת ל-S3 ללא צורך בשמירת Access Keys ישירות על השרת.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה תפקידו של Internet Gateway ב-VPC וכיצד הוא שונה מ-NAT Gateway?",
        "a": "Internet Gateway מחבר את ה-VPC לאינטרנט ומאפשר לתעבורה ציבורית להיכנס ולצאת מהרשת הווירטואלית. הוא נדרש עבור Subnets ציבוריים שצריכים תקשורת ישירה עם העולם החיצון. לעומתו, NAT Gateway מאפשר למשאבים מ-Subnets פרטיים, שאין להם כתובת IP ציבורית, לגשת לאינטרנט (לדוגמה, לצורך עדכוני תוכנה) מבלי לחשוף אותם ישירות לרשת הציבורית. כלומר, הוא מספק יציאה החוצה בלבד ולא מאפשר כניסה פנימה מהאינטרנט.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את ההבדל בין Application Load Balancer (ALB) ל-Network Load Balancer (NLB) ומתי תבחר להשתמש באחד מהם.",
        "a": "ALB פועל בשכבה 7 (HTTP/HTTPS) ומאפשר ניתוב תעבורה מבוסס תוכן, כמו הדומיין או הנתיב ב-URL. הוא מספק פיצ'רים מתקדמים כמו ניתוב מבוסס Header או Host, ומתאים לאפליקציות ווב. NLB פועל בשכבה 4 (TCP/UDP) ומעביר תעבורה ברמת ה-IP והפורט בלבד, עם ביצועים גבוהים יותר ו-Latency נמוך. הוא מתאים לעומסי עבודה הדורשים ביצועים קיצוניים או עבור פרוטוקולים שאינם HTTP/HTTPS.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "כיצד Auto Scaling Group תורם ליציבות וזמינות של אפליקציות ב-AWS?",
        "a": "Auto Scaling Group שומר על מספר קבוע של EC2 instances זמינים, או מתאים את המספר באופן דינמי בהתאם לעומס שהוגדר. הוא מגביר את היציבות על ידי החלפת instances שנכשלו ושומר על זמינות גבוהה על ידי הוספת instances כאשר יש עומס וגדילה בביקוש. בכך, הוא מבטיח שהאפליקציה תישאר זמינה ותגיב באופן עקבי גם תחת תנאי עומס משתנים, תוך אופטימיזציה של עלויות.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו תפקידו המרכזי של Route 53, וציין יתרון אחד על פני שירות DNS מסורתי?",
        "a": "Route 53 הוא שירות DNS מנוהל של AWS, שתפקידו לנתב בקשות דומיין למשאבים המתאימים, כגון EC2 instances, Load Balancers או S3 Buckets. יתרון מרכזי על פני שירות DNS מסורתי הוא האינטגרציה העמוקה שלו עם שאר שירותי AWS, כולל יכולות כמו Health Checks מתקדמים. לדוגמה, Route 53 יכול לנתב תעבורה ל-IP תקין בלבד מתוך קבוצת IP's שהוגדרה לו. כמו כן, הוא מציע יכולות ניתוב גיאוגרפי (Geolocation Routing) ומדיניות Latency-based Routing.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "כיצד ניתן להשתמש ב-CloudWatch לניטור ובקרה של משאבי AWS?",
        "a": "CloudWatch אוסף ומנטר מדדים (Metrics), יומנים (Logs) ואירועים (Events) משירותי AWS השונים. הוא מאפשר יצירת Dashboards ויזואליים של מדדים, הגדרת אזעקות (Alarms) בעת חריגה מספים מוגדרים - לדוגמה, שימוש גבוה במעבד - ושליחת התראות. בנוסף, CloudWatch יכול להפעיל פעולות אוטומטיות, כמו הפעלת Lambda Function בתגובה לאירוע כלשהו, ובכך לסייע בניהול פרואקטיבי של המערכת.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את היתרונות של שימוש ב-AWS RDS לעומת התקנת בסיס נתונים עצמאית על EC2 instance.",
        "a": "RDS הוא שירות בסיסי נתונים מנוהל המפשט באופן משמעותי את ניהול בסיס הנתונים. הוא מטפל באופן אוטומטי במשימות כמו גיבויים, שדרוגי גרסאות, וטיפול בפאצ'ים, מה שחוסך זמן ומשאבים מהמפתח או מנהל המערכת. בנוסף, RDS מציע זמינות גבוהה באמצעות Multi-AZ Deployment וסקיילביליות קלה, תכונות שהיו דורשות מאמץ רב להטמעה עצמאית על EC2.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהי AWS Lambda וכיצד היא משתלבת בארכיטקטורת Serverless?",
        "a": "AWS Lambda הוא שירות מחשוב Serverless המאפשר להריץ קוד ללא צורך בניהול שרתים. אתה מעלה את הקוד, ו-Lambda מפעילה אותו בתגובה לאירועים, כמו בקשת HTTP, שינוי באובייקט S3 או הודעה ממערכת תורים. היא משלבת בצורה אידיאלית בארכיטקטורת Serverless בכך שהיא מספקת את היכולת לבנות יישומים מבוזרים וקלי משקל, שהם חסכוניים, סקיילביליים ואוטומטיים, ללא צורך להתעסק בתשתית האינפרסטרוקטורה.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "כיצד תבטיח ש-EC2 instances באוטו סקיילינג גרופ ישרדו כשל אזורי זמינות (Availability Zone failures)?",
        "a": "על מנת להבטיח עמידות בפני כשל אזורי זמינות, יש לפרוס את ה-Auto Scaling Group על פני מספר Availability Zones. בנוסף, יש לוודא שה-AMI (Amazon Machine Image) וה-Launch Template מוגדרים בצורה נכונה וזמינים בכל האזורים. חשוב גם לאזן את חלוקת ה-instances בין האזורים השונים לצורך זמינות מרבית.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את עקרון הפעולה של Security Group ו-NACL (Network Access Control List) ב-VPC, ומתי תעדיף להשתמש באחד מהם.",
        "a": "Security Group פועל כ-firewall ברמת ה-instance ומנהל תעבורה נכנסת ויוצאת עבורו, בעוד ש-NACL פועל כ-firewall חסום-מצב ברמת ה-subnet ומסנן תעבורת רשת. Security Groups הם 'מדינתית' (stateful) ומאפשרים בקלות לאפשר תעבורה חוזרת, בעוד ש-NACLs הם 'חסרי מדינה' (stateless) ודורשים הגדרה נפרדת ל-inbound ול-outbound. בדרך כלל, נשתמש ב-Security Groups לניהול גישה ספציפית ל-instances וב-NACLs כשכבת הגנה נוספת ברמת ה-subnet, בעיקר במצבים הדורשים בקרת תעבורה גסה יותר.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו תפקידו של EKS (Elastic Kubernetes Service) וכיצד הוא מפשט את ניהול קוברנטס ב-AWS?",
        "a": "EKS הוא שירות מנוהל של AWS המאפשר להפעיל אשכולות Kubernetes ללא צורך בניהול שרתי הבקרה (control plane). הוא מפשט את הפריסה, הניהול וההרחבה של קוברנטס על ידי טיפול אוטומטי במשימות כמו עדכונים, תיקונים והחלפת רכיבים כושלים ב-control plane. EKS משתלב עם שירותי AWS אחרים כגון VPC, IAM, load balancers, ו-CloudWatch, ומאפשר שימוש בסביבת קוברנטס יציבה ובטוחה. הוא חוסך את הצורך בהתקינה ותחזוקת Kubernetes master nodes.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "כיצד תשמש ב-IAM Roles על מנת לאפשר ל-EC2 instance לגשת לשירותי S3 באופן מאובטח?",
        "a": "כדי לאפשר ל-EC2 instance לגשת לשירותי S3 באופן מאובטח, יש להשתמש ב-IAM Role. יש ליצור IAM Role עם Policy המעניק את ההרשאות המתאימות ל-S3 (לדוגמה, S3 Read-Only Access). לאחר מכן, יש לשייך את ה-IAM Role הזה ל-EC2 instance בעת ההשקה או לאחר מכן. ה-EC2 instance יקבל באופן זמני את ההרשאות הנדרשות דרך ה-Role, ובכך נמנע הצורך לשמור credentials רגישים ישירות על ה-instance.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "ציין והסבר שני יתרונות מרכזיים של שימוש ב-AWS Lambda לפונקציות \"ללא שרת\" (serverless functions).",
        "a": "שני יתרונות מרכזיים של AWS Lambda הם ניהול תשתית אוטומטי ותמחור מבוסס שימוש. Lambda מנהלת באופן מלא את התשתית הבסיסית, כולל שרתים, מערכת הפעלה ועדכונים, מה שחוסך זמן ומאמץ למפתחים ומהנדסי DevOps. בנוסף, התמחור של Lambda הוא לפי כמות הביצועים והזיכרון הנצרכים בלבד, ולא עבור זמני המתנה או הקצאת משאבים קבועה, מה שמוביל לחיסכון משמעותי בעלויות עבור יישומים עם עומס משתנה.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהם עקרונות ה-Elasticity וה-Scalability בשירותי ענן?",
        "a": "Elasticity מתארת את היכולת של מערכת להתאים את כמות המשאבים שלה באופן אוטומטי ודינמי, בהתאם לדרישות העומס המשתנות. Scalability מתייחסת ליכולת של מערכת לטפל בעומסים גוברים על ידי הוספת משאבים. בענן, עקרונות אלו מאפשרים ליישומים להתמודד עם שינויים פתאומיים בעומס תוך אופטימיזציה של עלויות וביצועים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "ציין והסבר בקצרה 2 יתרונות ו-2 חסרונות של מחשוב ענן.",
        "a": "יתרונות: 1. גמישות וסקלאביליות: יכולת להגדיל או להקטין משאבים במהירות לפי הצורך. 2. חיסכון בעלויות: מעבר מהוצאות הון (CAPEX) להוצאות תפעוליות (OPEX) ותשלום לפי שימוש. חסרונות: 1. תלות בספק: תלות בספק הענן עלולה ליצור בעיות נעילה (Vendor Lock-in). 2. חששות אבטחה: העברת נתונים לספק חיצוני מעלה חששות לגבי פרטיות ואבטחת מידע.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה זה IaaS, PaaS ו-SaaS בענן? תן דוגמה לכל אחד.",
        "a": "IaaS (Infrastructure as a Service) מספק תשתית מחשוב כמו שרתים וירטואליים. לדוגמה: Virtual Machines ב-AWS EC2. PaaS (Platform as a Service) מספק פלטפורמה לפיתוח והרצת יישומים. לדוגמה: Heroku, או AWS Elastic Beanstalk. SaaS (Software as a Service) מספק תוכנה כשירות, לרוב דרך דפדפן. לדוגמה: Gmail, Office 365, Salesforce.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "כיצד תשתמש ב-Cloud-agnostic solutions בתפקידך?",
        "a": "כאיש DevOps, אשתמש ב-Cloud-agnostic solutions כדי למנוע תלות בספק ענן ספציפי (vendor lock-in) ולהבטיח גמישות. לדוגמה, אשתמש בקונטיינרים (Docker) ובפלטפורמות אורקסטרציה (Kubernetes) שניתן להריץ על כל ענן, ובכלי Infrastructure as Code כמו Terraform שיודעים לתמוך במספר ספקי ענן. זה יאפשר לי לפרוס ולנהל יישומים בצורה עקבית על פני סביבות ענן שונות ואף בסביבות On-Premise.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "באיזה Subnet (Public או Private) נכון למקם בסיס נתונים בענן, ולמה?",
        "a": "תמיד ב-Private Subnet. בסיס הנתונים מכיל מידע רגיש ואין סיבה שתהיה אליו גישה ישירה מהאינטרנט. ב-Private Subnet אין נתיב ל-Internet Gateway, כך שה-DB אינו נגיש מבחוץ. הגישה אליו מתבצעת רק משרתי האפליקציה (שיכולים להיות ב-Public Subnet עם ALB מולם, או רצוי גם הם ב-Private Subnet מאחורי Load Balancer). אם ה-DB צריך לצאת לאינטרנט (למשל לעדכונים), משתמשים ב-NAT Gateway. בנוסף, Security Group של ה-DB יאפשר תעבורה רק מה-Security Group של ה-App Servers על הפורט הרלוונטי (3306/5432).",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "תאר ארכיטקטורה טיפוסית של 3-Tier Web Application בענן (AWS). היכן ימוקם כל רכיב?",
        "a": "ארכיטקטורה קלאסית: 1) Presentation Tier - ALB ב-Public Subnets במספר AZs, מקבל תעבורה מהאינטרנט דרך Internet Gateway. 2) Application Tier - EC2/ECS/EKS ב-Private Subnets, ב-Auto Scaling Group פרוס על מספר AZs. ה-ALB מנתב אליהם תעבורה. גישה החוצה (apt update, API חיצוני) דרך NAT Gateway. 3) Data Tier - RDS Multi-AZ ב-Private Subnets ייעודיים (DB Subnet Group), ללא גישה לאינטרנט כלל. Security Groups בשרשרת: ALB-SG מקבל 443 מ-0.0.0.0/0; App-SG מקבל מ-ALB-SG בלבד; DB-SG מקבל מ-App-SG בלבד.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "אפליקציה צריכה לשמור קבצים שהמשתמשים מעלים (תמונות, PDF). איפה תשמור אותם - ב-DB, על דיסק EBS של השרת, או ב-S3? למה?",
        "a": "ב-S3, כמעט תמיד. סיבות: 1) עלות נמוכה משמעותית מ-EBS או DB. 2) Durability של 99.999999999% והצפנה מובנית. 3) Scalability אינסופית - אין צורך לדאוג לגודל. 4) שרתי האפליקציה נשארים stateless, מה שמאפשר Auto Scaling אמיתי. אם הקבצים על EBS של שרת ספציפי, איבוד השרת = איבוד הקבצים, ואי אפשר להוסיף שרתים בקלות. שמירה ב-DB מנפחת אותו, פוגעת בביצועים ויקרה. לקבצים פרטיים משתמשים ב-Pre-Signed URLs כדי לתת גישה זמנית מבוקרת.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מתי נכון להשתמש ב-Cache (כמו Redis/ElastiCache) ואיפה הוא ימוקם בארכיטקטורה?",
        "a": "Cache שימושי כשיש: קריאות חוזרות לאותו מידע, שאילתות DB יקרות, נתוני Session שצריכים להיות משותפים בין שרתים, או Rate Limiting. מיקום: ב-Private Subnet בין שכבת ה-App ל-DB, באותו VPC כדי למזער latency. ElastiCache (Redis) ב-Multi-AZ עם Replica לזמינות. ה-App פונה תחילה ל-Cache (Cache-Aside pattern), ורק במקרה של Miss פונה ל-DB ושומר את התוצאה ב-Cache עם TTL. Security Group של Redis יאפשר 6379 רק מ-App-SG. חשוב להחליט על אסטרטגיית Invalidation כדי למנוע מידע מיושן.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "איך שני מיקרו-שירותים בתוך אותו VPC צריכים לתקשר ביניהם - דרך האינטרנט הציבורי או באופן פנימי? ולמה?",
        "a": "באופן פנימי, דרך כתובות IP פרטיות בתוך ה-VPC או דרך Service Discovery (כמו Cloud Map / DNS פנימי / Service של Kubernetes). יתרונות: 1) אבטחה - התעבורה לא יוצאת מהרשת הפרטית ולא חשופה לאינטרנט. 2) Latency נמוך משמעותית. 3) עלות - תעבורה בין AZs זולה יותר מתעבורה דרך Internet Gateway, ובאותו AZ היא חינמית. 4) אין צורך ב-Public IPs לשירותים פנימיים. תקשורת בין VPCs נעשית דרך VPC Peering או Transit Gateway, ולשירותי AWS דרך VPC Endpoints (PrivateLink) במקום לצאת לאינטרנט.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מתי תבחר במסד נתונים רלציוני (RDS/Aurora) ומתי ב-NoSQL (DynamoDB/MongoDB)? תן שיקולי החלטה.",
        "a": "רלציוני (SQL) כש: יש קשרים מורכבים בין ישויות, נדרשות טרנזקציות ACID, השאילתות מגוונות ולא ידועות מראש, נדרשת עקביות חזקה (פיננסי, ERP). NoSQL (DynamoDB) כש: דפוסי גישה ידועים מראש וקבועים, צריך scale עצום עם latency של מילישניות בודדות, סכמה גמישה (JSON), עומסי כתיבה גבוהים מאוד. שיקולים נוספים: עלות (DynamoDB pay-per-request מצוין לעומסים משתנים), ניהול (שניהם מנוהלים), Multi-Region (Aurora Global vs DynamoDB Global Tables). פעמים רבות בארכיטקטורה אמיתית משתמשים בשניהם - Polyglot Persistence - כל שירות עם ה-DB המתאים לו.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "אפליקציה שולחת אימייל למשתמש בכל הרשמה. איך תתכנן את זה כך שלא יחסום את ה-Request ויהיה עמיד לכשלים?",
        "a": "באמצעות תור הודעות אסינכרוני (Queue). הזרימה: 1) ה-API מקבל את ההרשמה, שומר ב-DB ומיד שולח הודעה ל-SQS / SNS עם פרטי האימייל, ומחזיר תשובה למשתמש מיד. 2) Worker נפרד (Lambda או EC2/ECS) צורך הודעות מה-Queue ושולח את האימייל דרך SES. יתרונות: ה-Request חוזר מהר; אם שירות האימייל נופל, ההודעות מחכות בתור; אפשר לעשות Retries אוטומטיים; Dead Letter Queue (DLQ) להודעות שנכשלו שוב ושוב; אפשר לסקייל את ה-Workers בנפרד מה-API לפי עומס. זוהי גישה של Decoupling - עיקרון יסוד בארכיטקטורת ענן.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו Bastion Host (Jump Server) ולמה צריך אותו? האם יש אלטרנטיבות מודרניות?",
        "a": "Bastion Host הוא שרת ב-Public Subnet שמשמש כנקודת כניסה יחידה ל-SSH/RDP אל שרתים שנמצאים ב-Private Subnets. במקום לחשוף כל שרת לאינטרנט, רק ה-Bastion חשוף, ומכוסה ב-Security Group שמרשה SSH רק מכתובות IP מוגדרות. מהבסטיון מתחברים פנימה לשרתים הפרטיים. אלטרנטיבות מודרניות ועדיפות: 1) AWS Systems Manager Session Manager - חיבור לשרת דרך ה-Console או CLI ללא פתיחת פורט 22 כלל וללא צורך ב-SSH Keys, עם לוגים מלאים ב-CloudTrail. 2) AWS Client VPN / Tailscale / Teleport. 3) EC2 Instance Connect Endpoint. אלו פתרונות בטוחים יותר ופותרים את הסיכון של חשיפת Bastion.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "אפליקציה צורכת Secret כמו סיסמת DB או API Key. איפה תשמור אותם ולמה לא בקוד או בקובץ קונפיגורציה?",
        "a": "ב-AWS Secrets Manager או Parameter Store (SSM), לעולם לא בקוד או בקובץ קונפיגורציה ב-Git. בעיות עם קוד/קונפיג: סודות מודלפים להיסטוריית Git, נחשפים לכל מפתח, אי אפשר להחליף מבלי deploy מחדש. יתרונות Secrets Manager: 1) הצפנה ב-rest דרך KMS. 2) Rotation אוטומטי של סיסמאות DB. 3) גישה מבוקרת דרך IAM Policies - האפליקציה מקבלת IAM Role, ושולפת את הסוד ב-runtime. 4) Audit Trail ב-CloudTrail. 5) ניתן לעדכן סוד בלי לשנות קוד. ב-Kubernetes משתמשים ב-Sealed Secrets / External Secrets Operator שמסנכרן מ-Secrets Manager. עיקרון: סודות = נתונים, לא קוד.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה ההבדל בין High Availability ל-Disaster Recovery, ואיך הם משתקפים בארכיטקטורת הענן?",
        "a": "High Availability (HA) = יכולת להמשיך לפעול למרות כשל של רכיב בודד, בתוך אותו אזור. מיושם על ידי: Multi-AZ deployment, Auto Scaling Groups, Load Balancers, RDS Multi-AZ, replica של Redis. RPO/RTO של שניות עד דקות. Disaster Recovery (DR) = יכולת התאוששות מכשל אזורי שלם או אסון רחב היקף. מיושם על ידי: Multi-Region - backups חוצי אזור (S3 Cross-Region Replication), Aurora Global Database, Route 53 Failover. ארבע אסטרטגיות DR: Backup & Restore (זול, RTO שעות), Pilot Light, Warm Standby, Multi-Site Active-Active (יקר, RTO כמעט אפס). הבחירה תלויה בעלות מול עלות-זמן-השבתה לעסק.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה ההבדל בין Vertical Scaling ל-Horizontal Scaling, ומתי תבחר בכל אחד מהם בארכיטקטורת ענן?",
        "a": "Vertical Scaling (Scale Up) = הגדלת המשאבים של אותו שרת - יותר CPU, RAM או דיסק (למשל מעבר מ-t3.medium ל-t3.xlarge). יתרונות: פשוט ליישום, לא דורש שינוי באפליקציה. חסרונות: יש תקרה פיזית, דורש downtime להחלפת instance, ונקודת כשל בודדת (SPOF). Horizontal Scaling (Scale Out) = הוספת עוד שרתים זהים מאחורי Load Balancer. יתרונות: כמעט בלי תקרה, High Availability מובנה, מתאים ל-Auto Scaling דינמי. חסרונות: דורש שהאפליקציה תהיה Stateless (Sessions ב-Redis ולא בזיכרון), מורכב יותר. בענן מודרני כמעט תמיד מעדיפים Horizontal - זה הכוח האמיתי של הענן. Vertical שמור ל-DBs (RDS Scale Up) או לשירותים שקשה לפזר. כלל אצבע: Scale Up עד הגבול הסביר, Scale Out לכל השאר.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "איך היית מתכנן web app עם high availability על פני כמה availability zones?",
        "a": "הייתי משתמש ב-load balancer על פני כמה AZs, replicas stateless של האפליקציה, data services ב-Multi-AZ, health checks, autoscaling ו-deployment strategies ששומרות על capacity. צריך לבדוק בפועל אובדן AZ ולא להניח שהדיאגרמה עובדת.",
        "signals": [
          "Separates stateless and stateful layers",
          "Mentions health checks and capacity",
          "Includes failure testing"
        ]
      },
      {
        "q": "איך היית שולט בעלויות cloud בלי לפגוע ב-reliability?",
        "a": "מתחילים מ-tags, budgets, ownership ו-unit cost dashboards. אחר כך עושים right-sizing, מכוונים autoscaling, משתמשים ב-savings plans לעומסים קבועים, spot ל-jobs שאפשר לעצור, storage lifecycle policies, ומסירים resources לא פעילים בלי לפגוע ב-SLOs.",
        "signals": [
          "Uses visibility before cuts",
          "Balances spot and reliability",
          "Mentions SLOs and ownership"
        ]
      },
      {
        "q": "איך היית ניגש לתכנון disaster recovery?",
        "a": "קודם מגדירים RTO ו-RPO. אחר כך בוחרים בין backup/restore, pilot light, warm standby, active-passive או active-active. חשוב לאוטומט ולתרגל restores, failover, DNS changes והתאוששות של dependencies.",
        "signals": [
          "Starts with RTO/RPO",
          "Tests restores",
          "Understands active-active complexity"
        ]
      },
      {
        "q": "אילו patterns משפרים resilience במערכות cloud מבוזרות?",
        "a": "Timeouts, retries מוגבלים עם backoff, circuit breakers, bulkheads, idempotency, queues, graceful degradation ו-regional isolation מקטינים cascading failures, במיוחד כשמשלבים אותם עם observability ו-incident drills.",
        "signals": [
          "Mentions retry storms",
          "Uses idempotency",
          "Connects patterns to operations"
        ]
      },
      {
        "q": "תכנן ארכיטקטורת AWS עבור backend של mobile gaming עם traffic spikes גדולים.",
        "a": "הייתי משתמש ב-edge protection ו-routing עם CloudFront/WAF/Route 53 כשזה רלוונטי, ALB/NLB לתוך private subnets, services stateless על EKS/ECS, autoscaling לפי traffic ו-backlog, Redis/ElastiCache ל-shared state עם latency נמוך, SQS/SNS/EventBridge לעבודה async, ו-Aurora/DynamoDB לפי access pattern. לא שומרים state בתוך app pods, Multi-AZ הוא default, וה-paths הכי חמים חייבים observability ו-load tests.",
        "signals": [
          "Chooses AWS services by workload shape",
          "Handles spikes with async buffering and autoscaling",
          "Separates stateless APIs from stateful data paths"
        ]
      },
      {
        "q": "איך היית בוחר בין ALB, NLB ו-API Gateway עבור backend traffic?",
        "a": "ALB הוא בדרך כלל default ל-HTTP services שצריכים path/host routing, TLS termination ואינטגרציה עם Kubernetes ingress. NLB מתאים ל-TCP/UDP throughput גבוה מאוד, static IP requirements או שמירה על connection behavior. API Gateway מתאים ל-managed API edge עם auth, throttling ו-request shaping, אבל מוסיף latency ועלות.",
        "signals": [
          "Knows layer 7 versus layer 4 tradeoffs",
          "Mentions Kubernetes ingress fit",
          "Considers latency, cost, and managed API features"
        ]
      },
      {
        "q": "איך היית מונע מ-game או tournament flow רועש אחד להפיל shared backend infrastructure?",
        "a": "משתמשים ב-isolation ו-backpressure: autoscaling לכל service, queues, rate limits, bulkheads, node pools או namespaces נפרדים ל-workloads קריטיים, dependency quotas, circuit breakers וסדרי עדיפויות ברורים בין gameplay-critical ל-features פחות קריטיים. Observability צריך להראות איזה flow צורך capacity.",
        "signals": [
          "Mentions bulkheads and backpressure",
          "Separates critical and non-critical paths",
          "Uses per-flow observability"
        ]
      },
      {
        "q": "Redis שמחזיק tournament state מתחיל להגיע ל-latency גבוה בזמן traffic spike. איך היית ניגש לזה?",
        "a": "קודם מאשרים שהבעיה באמת ב-Redis ולא ב-client, network או serialization. בודקים CPU, memory, evictions, slowlog, hot keys, connection count ו-command mix. בטווח קצר אפשר להוסיף capacity, לשפר connection pooling, להוריד TTLs בעייתיים או לבודד flow רועש. בטווח ארוך מתכננים sharding, data model מתאים, caching boundaries ו-backpressure כדי ש-Redis לא יהיה single choke point.",
        "signals": [
          "Checks Redis and client-side causes",
          "Mentions hot keys and slowlog",
          "Separates mitigation from design fix"
        ]
      },
      {
        "q": "איך היית מתכנן multi-region strategy לפלטפורמת gaming שצריכה latency נמוך אבל גם data consistency?",
        "a": "מתחילים מהחלוקה בין read-heavy, session state, payments ו-tournament results. Traffic routing יכול להיות geo/latency based, אבל state קריטי צריך ownership ברור: region primary, active-passive, או active-active רק כשיש conflict resolution ו-idempotency. Senior answer צריך לדבר על RTO/RPO, data residency, failover testing, DNS behavior, duplicate events ודרך להחזיר region בלי corrupt data.",
        "signals": [
          "Separates latency from consistency needs",
          "Mentions conflict and duplicate event handling",
          "Uses RTO/RPO and failover tests"
        ]
      },
      {
        "q": "איך היית מטפל ב-traffic spike פתאומי אחרי קמפיין marketing בלי להגדיל עלויות בצורה לא נשלטת?",
        "a": "מכינים מראש capacity envelope: autoscaling לפי metrics נכונים, warm capacity לשירותים איטיים ל-scale, queues ל-burst absorption, rate limits ל-flows לא קריטיים ו-caching איפה שמותר. במקביל שמים budgets ו-alerts לפי unit cost, ומגדירים degradation plan כדי לשמור על gameplay/payments לפני analytics או features פחות קריטיים.",
        "signals": [
          "Balances scale and cost",
          "Prioritizes critical paths",
          "Uses queues, caching, and rate limits"
        ]
      },
      {
        "q": "מה היית בודק כש-service ב-EKS מקבל timeout רק מחוץ ל-cluster אבל לא מתוך cluster?",
        "a": "הייתי מפריד בין ingress path ל-service path: DNS, CloudFront/WAF אם קיימים, ALB/NLB target health, ingress controller, security groups, NACLs, TLS, idle timeout, readiness endpoints ו-path routing. אם בתוך cluster עובד, הבעיה לרוב ב-edge, load balancer, ingress config או network policy שמבדילה בין מקורות traffic.",
        "signals": [
          "Separates internal and external paths",
          "Knows AWS load balancer and ingress layers",
          "Checks timeout and health configuration"
        ]
      },
      {
        "q": "איך היית מתכנן observability ל-backend של tournaments כדי לזהות בעיות לפני שמשתמשים מתלוננים?",
        "a": "מגדירים golden signals לכל service, אבל מוסיפים business telemetry: הצלחות וכשלונות join, match start, payment, result submission ו-prize flow לפי version, region ו-platform. צריך traces ל-critical flows, logs עם correlation ID, dashboards לפי user impact ו-alerts שמבוססים על SLOs ולא רק על CPU.",
        "signals": [
          "Uses business metrics, not only infrastructure metrics",
          "Mentions traces and correlation IDs",
          "Alerts on SLO/user impact"
        ]
      }
    ]
  },
  {
    "subject": "Infrastructure as Code",
    "icon": "IA",
    "items": [
      {
        "q": "מהו Terraform state, ומדוע ניהולו חיוני בתהליכי Infrastructure as Code (IaC)?",
        "a": "Terraform state הוא קובץ הממפה את המשאבים האמיתיים בתשתית שלך (כמו EC2 instance או S3 bucket) עם הגדרות הקונפיגורציה ב-Terraform. הוא עוקב אחר המצב הנוכחי של התשתית ומאפשר ל-Terraform לתכנן ולבצע שינויים בצורה מושכלת. ניהול נכון שלו, לרוב באמצעות Remote State, חיוני למנוע מצבים שבהם Terraform מאבד את המעקב אחר המשאבים, מה שעלול להוביל ליצירה כפולה, מחיקה שגויה או אי-התאמות בין הקוד לתשתית בפועל.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את ההבדל בין data block ל-resource block ב-Terraform, ותן דוגמה לכל אחד מהם.",
        "a": "ב-Terraform, resource block מגדיר משאבים חדשים ש-Terraform ייצור וינהל, כמו קרוב של EC2 instance או יצירה של S3 bucket. לעומתו, data block מאפשר להתייחס למשאבים קיימים או נתונים חיצוניים ש-Terraform לא מנהל באופן ישיר, אך הוא זקוק למידע עליהם לצורך הגדרת משאבים אחרים. לדוגמה, data block יכול לשמש כדי לקרוא את ה-AMI ID העדכני ביותר עבור אובונטו, ואילו resource block ייצור מכונה וירטואלית עם ה-AMI הזה.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מה תפקידם של Terraform modules, וכיצד הם תורמים ליעילות וליכולת תחזוקה של קוד IaC?",
        "a": "Terraform modules הם קונטיינרים ניתנים לשימוש חוזר של קונפיגורציות Terraform. הם מאפשרים לארגן את הקוד בצורה לוגית, לקבץ משאבים קשורים יחד ולקודד ארכיטקטורות נפוצות כבלוקים ניתנים לשימוש חוזר. השימוש ב-modules מפחית את כמות הקוד הכפול, משפר את יכולת התחזוקה על ידי הפרדת דאגות, ומאפשר שיתוף קוד בין פרויקטים שונים. כל module יכול לקבל משתנים כקלט (inputs) ולהחזיר ערכים כפלט (outputs), מה שמאפשר התאמה אישית וגמישות. לדוגמה, ניתן ליצור module עבור 'VPC עם subnets' ולהשתמש בו במספר סביבות עם פרמטרים שונים, תוך שמירה על עקביות ואיכות הקוד.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר מהו remote state ב-Terraform ומדוע הוא מומלץ בסביבת צוותים מרובת משתמשים. אילו אתגרים הוא פותר בתהליכי עבודה משותפים?",
        "a": "Terraform remote state מאפשר לאחסן את קובץ ה-state של Terraform במיקום מרוחק ומשותף, כמו S3 או Azure Blob Storage, במקום בקובץ מקומי. זה חיוני בסביבת צוותים מכיוון שזה פותר בעיות של גישה מקבילה לקובץ ה-state, מונע שחיתות נתונים ומבטיח שכל חברי הצוות עובדים עם מצב התשתית העדכני ביותר. בנוסף, הוא מספק נקודת שחזור מרכזית ומאפשר נעילה (locking) למניעת שינויים סותרים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו Terraform workspace ומתי כדאי להשתמש בו? תאר תרחיש שבו workspaces יכולים להיות שימושיים.",
        "a": "Terraform workspace מאפשר ליצור סביבות נפרדות (כגון development, staging, production) מאותו קוד Terraform. כל workspace מנהל קובץ state משלו, מה שמאפשר להפעיל את אותו קוד תשתית עם משתנים סביבתיים שונים מבלי לשנות את הקוד עצמו. לדוגמה, ניתן להשתמש ב-workspaces כדי להקים סביבת פיתוח ובדיקות נפרדות עבור אותה אפליקציה, כל אחת עם משאבים וקונפיגורציה משלה, מבלי להתנגש ביניהן או לדרוס את סביבת הייצור.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "כיצד Terraform מזהה drift (סטיות) בתשתית, ומדוע חשוב לטפל בו? תאר דרך אחת לזהות ולתקן drift.",
        "a": "Terraform מזהה drift על ידי השוואת ה-state הנוכחי של התשתית בפועל (ב-cloud provider) אל מול ה-state שמתועד בקובץ ה-Terraform state. כאשר יש אי-התאמה, Terraform יראה זאת בביצוע פקודת terraform plan. חשוב לטפל ב-drift מכיוון שהוא יכול להוביל לחוסר עקביות, בעיות אבטחה ולפגוע ביכולת לשחזר את הסביבה. דרך אחת לטפל ב-drift היא להריץ `terraform plan` באופן קבוע כדי לזהות סטיות, ולאחר מכן להריץ `terraform apply` כדי להחזיר את התשתית למצב הרצוי המוגדר בקוד.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר מהו 'provider' ב-Terraform וכיצד הוא מאפשר אינטראקציה עם שירותי ענן שונים. תן דוגמה ל-provider נפוץ.",
        "a": "Provider ב-Terraform הוא פלאגין המאפשר ל-Terraform לתקשר עם API של שירותי צד שלישי, כגון ספקי ענן (AWS, Azure, GCP) או פלטפורמות אחרות (Kubernetes, GitHub). כל provider אחראי לחשוף resources ו-data sources ספציפיים לשירות שהוא מייצג, ומאפשר ל-Terraform ליצור, לנהל ולעדכן את המשאבים האלה באמצעות הקוד. דוגמה נפוצה היא `aws` provider, המאפשר לנהל שירותים כמו EC2, S3, RDS ועוד ב-Amazon Web Services.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "תאר את ההבדל והקשר בין הפקודות `terraform plan` ו-`terraform apply`. מדוע חשוב לבצע את שתיהן?",
        "a": "הפקודה `terraform plan` יוצרת תוכנית ביצוע המציגה אילו שינויים יבוצעו בתשתית בפועל (יצירה, עדכון או מחיקה) בהתבסס על קובצי הקונפיגורציה הנוכחיים וה-state. הפקודה `terraform apply` מבצעת בפועל את השינויים שהוצגו בתוכנית. חשוב לבצע את `terraform plan` תחילה כדי לבדוק ולאמת את השינויים המוצעים לפני שהם מיושמים, ובכך למנוע הפתעות, טעויות או שינויים לא רצויים, ואז להשתמש ב-`terraform apply` כדי לבצע אותם בצורה בטוחה ומבוקרת.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר מהו Ansible Inventory וכיצד הוא משמש להגדרת שרתי יעד ב-Ansible Playbooks. אילו פורמטים נפוצים קיימים לקובצי Inventory?",
        "a": "Ansible Inventory הוא קובץ (או קבוצת קבצים) המכיל רשימה של השרתים או ההתקנים שעליהם Ansible יפעל. הוא מאפשר לקבץ שרתים, להגדיר משתנים ספציפיים לשרתים או לקבוצות, ולספק מידע חיבור. Inventory יכול להיות סטטי (קובץ) או דינמי (נוצר על ידי סקריפט). פורמטים נפוצים לקובצי Inventory הם INI ו-YAML. הוא מאפשר גמישות רבה בניהול וארגון המכונות המנוהלות.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו Infrastructure as Code (IaC) ומהם יתרונותיו המרכזיים?",
        "a": "Infrastructure as Code (IaC) הוא גישה לניהול תשתית IT באמצעות קוד, במקום תצורות ידניות. במקום להגדיר שרתים, רשתות ומאגרי נתונים באופן ידני, הכל מוגדר בקבצי קוד שניתן לנהל בבקרת גרסאות. יתרונותיו המרכזיים כוללים: עקביות (elimination of drifts), שחזור מהיר, אוטומציה, ניהול גרסאות, יכולת לבצע בדיקות על התשתית ותחזוקה קלה יותר של הסביבות השונות.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "ציין והסבר בקצרה 2 כלים נפוצים ל-IaC.",
        "a": "1. Terraform: כלי IaC פופולרי המאפשר הגדרה ופריסה של תשתית על פני מספר ספקי ענן (Multi-Cloud) וגם בסביבות On-Premise, באמצעות שפת תצורה הצהרתית (HCL). 2. Ansible: כלי אוטומציה וניהול תצורה ללא סוכן (agentless) המאפשר הגדרה של תשתית, התקנת תוכנות וניהול תצורות על שרתים קיימים, באמצעות קובצי YAML.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את ההבדל בין גישה אימפרטיבית (Imperative) לגישה הצהרתית (Declarative) ב-IaC.",
        "a": "בגישה אימפרטיבית, אנו מורים למערכת 'כיצד לבצע' את הפעולות הנדרשות כדי להגיע למצב רצוי, לדוגמה: 'התקן חבילה X, ואז הפעל שירות Y'. בגישה הצהרתית, אנו מתארים 'מהו המצב הרצוי' של התשתית, והכלי עצמו אחראי להבין כיצד להגיע לשם. לדוגמה, ב-Terraform אנו מצהירים על משאבים (כגון 'שרת מסוג X'), והוא יבנה או ישנה אותם בהתאם. הגישה הצהרתית נפוצה יותר ב-IaC מכיוון שהיא מביאה לעקביות רבה יותר וקל יותר לתחזק אותה.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "כיצד IaC תורם לתהליכי CI/CD ו-DevOps?",
        "a": "IaC תורם רבות לתהליכי CI/CD ו-DevOps בכך שהוא מאפשר אוטומציה מלאה ושחזוריות של התשתית. על ידי ניהול תשתית כקוד, ניתן לשלב את בניית ופריסת התשתית בתוך צינור ה-CI/CD, מה שמאפשר פריסה מהירה ועקבית של סביבות. הוא גם מאפשר לבצע בדיקות על התשתית, לנהל גרסאות שלה ולשתף פעולה בבנייתה, מה שמקטין שגיאות אנוש ותורם ליציבות ואמינות של הסביבות הפרוסות.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "איך היית מסדר Terraform עבור כמה environments?",
        "a": "שומרים reusable modules בנפרד מ-live environment composition. משתמשים ב-remote state נפרד לכל environment, locking, pinned providers, reviewable plans ותיקיות מפורשות כאשר environments שונים מהותית.",
        "signals": [
          "Separates modules and live config",
          "Mentions state locking",
          "Understands workspace tradeoffs"
        ]
      },
      {
        "q": "איך היית עושה review ל-Terraform plan מסוכן?",
        "a": "בודקים creates, updates, deletes, replacements, dependency chains, lifecycle settings ו-provider quirks. במשאבים בסיכון גבוה בודקים identity, storage, networking ו-policy changes לפני apply, ועדיף לעשות apply במנות קטנות.",
        "signals": [
          "Focuses on replacement risk",
          "Mentions lifecycle/provider behavior",
          "Uses staged application"
        ]
      },
      {
        "q": "איך היית מארגן ownership על Terraform עבור product team שזז מהר בלי להאט delivery?",
        "a": "יוצרים reusable modules ל-platform patterns יציבים, משאירים environment composition מפורש, מריצים plan checks ב-CI, דורשים review למשאבים בסיכון גבוה, ונותנים לצוותי product אפשרויות קונפיגורציה בטוחות במקום גישה גולמית לכל primitive של cloud. Modules בבעלות platform צריכים לאפשר delivery מהיר בלי לוותר על guardrails.",
        "signals": [
          "Balances self-service with guardrails",
          "Mentions module versioning and plan review",
          "Thinks about product team velocity"
        ]
      },
      {
        "q": "אילו שינויי Terraform מסוכנים במיוחד עבור EKS production platform?",
        "a": "שינויים מסוכנים כוללים החלפת node groups, שינוי cluster networking, שינוי IAM roles שמשמשים workloads, החלפת security groups, שינוי load balancer annotations דרך IaC, ונגיעה בתלויות stateful כמו RDS או Redis. חשוב לבדוק replacement actions במיוחד.",
        "signals": [
          "Recognizes replacement and dependency risk",
          "Mentions EKS IAM/networking blast radius",
          "Uses staged applies and maintenance windows"
        ]
      }
    ]
  },
  {
    "subject": "Security",
    "icon": "SC",
    "items": [
      {
        "q": "הסבר מהו Secrets Management ומדוע הוא חיוני בסביבת DevOps. תאר בקצרה פתרונות נפוצים כמו Vault או AWS Secrets Manager.",
        "a": "Secrets Management הוא תהליך לניהול מאובטח של מידע רגיש כגון סיסמאות, מפתחות API ו-tokens. הוא חיוני למניעת חשיפה של מידע זה בקוד, בקובצי קונפיגורציה או ביומנים. פתרונות כמו HashiCorp Vault או AWS Secrets Manager מספקים מיקום מרכזי לאחסון מאובטח, הצפנה, בקרת גישה (ACLs) וביקורת (auditing) של סודות, ובכך מקטינים את הסיכון להתקפות ופרצות אבטחה. הם מאפשרים גם גלגול אוטומטי של סודות ואובייקטים דינמיים.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו Image Scanning ומדוע הוא מהווה שלב חשוב ב-CI/CD pipeline? תאר כלי לדוגמה כמו Trivy והסבר את עקרון פעולתו.",
        "a": "Image Scanning הוא תהליך של סריקת אימג'ים של קונטיינרים לאיתור חולשות אבטחה ידועות (CVEs), תוכנות זדוניות או קונפיגורציות שגויות. הוא קריטי ב-CI/CD pipeline למניעת פריסת קונטיינרים פגיעים לגרסאות פרודקשן. כלים כמו Trivy סורקים את השכבות השונות של האימג' ומשווים את החבילות המותקנות למאגרי מידע של חולשות אבטחה, ומספקים דו",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהי חשיבות השימוש ב-Network Policies באבטחת קוברנטס? תאר מקרה שימוש אחד והסבר כיצד Network Policy יכולה לפתור אותו.",
        "a": "Network Policies הן כלי חיוני לאבטחת תקשורת בין Pod-ים ובין Pod-ים לרשתות חיצוניות בקוברנטס. הן מאפשרות להגדיר כללים שקובעים אילו חיבורים מותרים או אסורים. לדוגמה, במקרה שבו רוצים להבטיח ש-frontend Pod יוכל לתקשר רק עם backend Pod מסוים בתוך אותו namespace, ניתן להגדיר Network Policy שתאפשר תעבורה רק מ-frontend Pod-ים ל-Backend Pod-ים בפורט הרלוונטי ותחסום כל תקשורת אחרת.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר את המושג 'Container Security' וציין שלושה היבטים חשובים שיש לקחת בחשבון בעת אבטחת קונטיינרים בסביבת production.",
        "a": "Container Security מתייחס למגוון שיטות וכלים שמטרתם לאבטח את מחזור החיים של קונטיינרים, החל מבניית האימג' ועד הרצתו בסביבת production. שלושה היבטים חשובים כוללים: 1. אבטחת האימג'ים: יש לוודא שהאימג'ים בנויים באופן מאובטח, ללא חולשות ידועות או רכיבים מיותרים. הדבר כולל סריקת אימג'ים באופן קבוע (לדוגמה, עם Trivy) ושימוש באימג'י בסיס קטנים ומוכרים. 2. ניהול הרשאות: יש להקפיד על עקרון ה-Least Privilege עבור קונטיינרים - לתת להם רק את ההרשאות המינימליות הנדרשות. 3. ניטור ובקרה: יש לנטר את פעילות הקונטיינרים בזמן ריצה כדי לזהות חריגות או פעילות זדונית, וליישם Network Policies כדי להגביל את התקשורת ביניהם.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "מהו 'Shift Left' באבטחת מידע ב-DevOps וכיצד הוא מיושם?",
        "a": "עקרון ה-'Shift Left' באבטחת מידע ב-DevOps מתייחס להטמעת שיקולי אבטחה בשלבים מוקדמים ככל האפשר של מחזור חיי הפיתוח. במקום לבדוק אבטחה רק לקראת השחרור, מיישמים אותו משלבי התכנון, הפיתוח והבדיקות. זה מיושם באמצעות כלים לסריקת קוד סטטית (SAST), סריקת קונטיינרים לאיתור פגיעויות, בדיקות אבטחה אוטומטיות כחלק מה-CI/CD pipeline, והכשרת מפתחים לנושאי אבטחה. המטרה היא לזהות ולתקן פגיעויות מוקדם, כאשר עלות התיקון נמוכה יותר.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "הסבר מהו Secret Management ומה חשיבותו בסביבת ענן.",
        "a": "Secret Management הוא התהליך של ניהול מאובטח של מידע רגיש כגון סיסמאות, מפתחות API, אסימוני גישה (tokens) ותעודות דיגיטליות. חשיבותו בסביבת ענן גבוהה במיוחד מכיוון שיישומים רבים פועלים בסביבות מבוזרות וצריכים לגשת למגוון רחב של שירותים. ניהול סודות מאובטח מונע חשיפה מקרית של מידע רגיש, מקטין את שטח התקיפה ותורם לעמידה ברגולציות אבטחה.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "כיצד תיישם את עקרון ה-Least Privilege בתפקידך כ-DevOps?",
        "a": "איישם את עקרון ה-Least Privilege על ידי מתן הרשאות מינימליות בלבד, הנדרשות עבור משתמשים, תהליכים ושירותים לביצוע משימותיהם. לדוגמה, במערכות ניהול גישה (IAM) בענן, אגדיר תפקידים (roles) עם הרשאות מוגבלות במקום מתן גישת אדמין גורפת. אדאג שקונטיינרים לא ירוצו עם הרשאות root אלא עם משתמשים מוגדרים, ושאוטומציות יקבלו את ההרשאות הספציפיות הנדרשות להן בלבד. זה מקטין משמעותית את הנזק הפוטנציאלי במקרה של פרצת אבטחה.",
        "signals": [
          "From the referenced Prep Pal QA bank",
          "Practice the exact concept and command flow",
          "For senior level, add tradeoffs, failure modes, and a production example"
        ]
      },
      {
        "q": "איך היית מגיב ל-production secret שדלף?",
        "a": "מבטלים או מסובבים את ה-secret מיד, מזהים scope ושימושים, בודקים access logs, מפיצים credentials חדשים בצורה בטוחה, מסירים את ה-secret מה-history כשזה מועיל, ומוסיפים controls כדי למנוע הישנות.",
        "signals": [
          "Rotates first",
          "Audits blast radius",
          "Adds prevention"
        ]
      },
      {
        "q": "מה הגישה שלך ל-container image security?",
        "a": "משתמשים ב-base images מינימליים ומהימנים, מקבעים versions, סורקים vulnerabilities, מסירים build tools מ-runtime images, מריצים כ-non-root כשאפשר, חותמים images, מייצרים SBOMs ובונים מחדש באופן קבוע.",
        "signals": [
          "Mentions non-root and minimal images",
          "Includes signing/SBOM",
          "Knows scans need remediation"
        ]
      },
      {
        "q": "איך היית מתכנן IAM least privilege ל-workloads שרצים על EKS ב-AWS?",
        "a": "משתמשים ב-IRSA או EKS Pod Identity כדי לתת לכל service account role ייעודי עם permissions מינימליים. מפרידים roles לפי workload, מגבילים resource ARNs ו-actions, נמנעים מ-node role רחב מדי, משתמשים ב-condition keys כשאפשר, ומריצים review תקופתי מול CloudTrail כדי להסיר הרשאות שלא בשימוש.",
        "signals": [
          "Mentions IRSA or Pod Identity",
          "Avoids broad node role permissions",
          "Uses audit data to reduce permissions"
        ]
      },
      {
        "q": "מה היית עושה כדי למנוע secret leakage מתוך CI/CD pipeline?",
        "a": "מעדיפים OIDC short-lived credentials על static secrets, מגבילים מי יכול להריץ jobs רגישים, לא מעבירים secrets ל-pull requests לא מהימנים, עושים masking ל-logs, סורקים repository ו-artifacts, ומפרידים environments כך ש-build רגיל לא יכול לקבל production credentials.",
        "signals": [
          "Uses short-lived credentials",
          "Protects PR and fork flows",
          "Mentions logs and artifacts"
        ]
      },
      {
        "q": "איך היית בודק supply chain risk ב-Helm charts וב-container images לפני production?",
        "a": "בודקים מקור ומהימנות של chart ו-image, מקבעים versions ו-digests, סורקים CVEs ו-misconfigurations, דורשים חתימות או provenance כשאפשר, מרנדרים Helm templates ב-CI מול policies, ובודקים שה-chart לא יוצר permissions רחבות, privileged pods או resources לא צפויים.",
        "signals": [
          "Pins versions and digests",
          "Checks rendered manifests",
          "Looks for excessive permissions"
        ]
      }
    ]
  },
  {
    "subject": "Python",
    "icon": "PY",
    "items": [
      {
        "q": "איך כותבים Python script אמין ל-production automation?",
        "a": "משתמשים ב-argparse, structured logging, timeouts, retries מוגבלים, exit codes מפורשים, tests, typed boundaries ופעולות idempotent. לפעולות הרסניות מוסיפים dry-run.",
        "signals": [
          "Mentions idempotency",
          "Uses logging and exit codes",
          "Tests side effects safely"
        ]
      },
      {
        "q": "מה זה GIL ומתי הוא משנה?",
        "a": "ה-Global Interpreter Lock מגביל execution מקבילי של Python bytecode ב-CPython threads. הוא משמעותי בעיקר בתוכניות CPU-bound עם threads; עבודה I/O-bound עדיין יכולה להרוויח מ-threads או async. לעבודה כבדה על CPU לרוב צריך multiprocessing או workers חיצוניים.",
        "signals": [
          "Distinguishes CPU-bound from I/O-bound",
          "Knows CPython specificity",
          "Suggests multiprocessing/workers"
        ]
      },
      {
        "q": "איך מטפלים ב-API calls בצורה robust ב-Python?",
        "a": "מגדירים connect ו-read timeouts, עושים retry רק לפעולות בטוחות או idempotent, מכבדים rate limits, מאמתים responses, רושמים correlation IDs, ומשתמשים ב-session/client כדי לעשות reuse ל-connections.",
        "signals": [
          "Never omits timeouts",
          "Mentions idempotent retries",
          "Handles rate limits"
        ]
      },
      {
        "q": "איך היית אורז Python tool לשימוש DevOps פנימי?",
        "a": "משתמשים ב-pyproject.toml, חושפים console scripts, מקבעים runtime dependencies, מפרסמים ל-internal package index או container image, ומתעדים configuration דרך flags, files או environment variables.",
        "signals": [
          "Knows pyproject.toml",
          "Mentions console entry points",
          "Considers distribution path"
        ]
      },
      {
        "q": "איך הופכים Python automation ל-observable?",
        "a": "מוציאים structured logs, counters/timers לפעולות מרכזיות, traces סביב external calls, ו-error handling עקבי. מוסיפים job IDs או request IDs כדי שאפשר יהיה לעקוב אחרי failures בין מערכות.",
        "signals": [
          "Uses structured logs",
          "Mentions metrics/tracing",
          "Includes correlation IDs"
        ]
      },
      {
        "q": "מה היית בודק כשאתה מכניס Node.js או Python backend service ל-container?",
        "a": "משתמשים ב-base image קטן ומקובע, מתקינים רק production dependencies בשכבת runtime, מריצים כ-non-root, מגדירים runtime options מודעי memory כשצריך, חושפים health endpoints, מטפלים ב-SIGTERM בצורה תקינה, ושומרים על startup צפוי עבור probes ו-rollouts. ל-Node.js בודקים memory flags ו-event loop behavior; ל-Python בודקים worker model ו-dependency build artifacts.",
        "signals": [
          "Covers runtime-specific production concerns",
          "Mentions graceful shutdown and probes",
          "Connects container design to rollout safety"
        ]
      }
    ]
  },
  {
    "subject": "Helm",
    "icon": "HM",
    "items": [
      {
        "q": "איזו בעיה Helm פותר ב-Kubernetes?",
        "a": "Helm אורז Kubernetes manifests קשורים לתוך charts עם versioning, templates ו-values שניתנים להגדרה. הוא עוזר להתקין, לשדרג, לעשות rollback ולסטנדרט אפליקציות, אבל הגמישות של values צריכה guardrails.",
        "signals": [
          "Explains charts, releases, and values",
          "Mentions rollback/versioning",
          "Sees template complexity risk"
        ]
      },
      {
        "q": "איך היית מסדר Helm values files בין environments?",
        "a": "שומרים defaults סבירים ב-values.yaml, קבצי override קטנים לכל environment, ו-secrets מחוץ ל-plain values כשאפשר. נמנעים מהעתקה של values files ענקיים לכל environment; עושים override רק להבדלים משמעותיים.",
        "signals": [
          "Separates defaults from overrides",
          "Avoids secret leakage",
          "Keeps values maintainable"
        ]
      },
      {
        "q": "איך היית מאבחן Helm upgrade שנכשל?",
        "a": "מרנדרים מקומית עם helm template, מאמתים עם helm lint, בודקים release history, משווים manifests, בודקים Kubernetes events, ומזהים אם הבעיה היא rendering, immutable fields, hooks, schema validation או workload health.",
        "signals": [
          "Uses render-before-apply",
          "Mentions immutable fields",
          "Understands release history"
        ]
      },
      {
        "q": "מה הם Helm hooks ומה הסיכונים שלהם?",
        "a": "Hooks מריצים resources בנקודות lifecycle כמו pre-install או post-upgrade. הם שימושיים ל-jobs ו-migrations, אבל יכולים להקשות על הבנת releases, להפיל upgrades, להשאיר resources מאחור או להריץ פעולות מסוכנות שוב.",
        "signals": [
          "Mentions hook lifecycle",
          "Understands cleanup policies",
          "Warns about migrations"
        ]
      },
      {
        "q": "איך שומרים על Helm charts בטוחים לשימוש של הרבה צוותים?",
        "a": "משתמשים ב-values.schema.json, helper templates, defaults הגיוניים, chart tests, CI rendering לכל environment, ownership מתועד ו-policy checks לשדות רגישים מבחינת security.",
        "signals": [
          "Mentions values.schema.json",
          "Uses CI template rendering",
          "Adds policy guardrails"
        ]
      },
      {
        "q": "איך היית מתכנן Helm chart שמשמש הרבה microservices בבעלות צוותים שונים?",
        "a": "שומרים את ה-chart opinionated סביב platform defaults משותפים: deployment, service, ingress, probes, resources, autoscaling, service account ו-observability labels. חושפים values ברורים רק להבדלים אמיתיים, מאמתים אותם עם values.schema.json, מרנדרים charts ב-CI, ומונעים escape hatches שמאפשרים לצוות אחד לשבור cluster-wide policy.",
        "signals": [
          "Knows reusable chart boundaries",
          "Mentions schema validation and CI rendering",
          "Avoids over-templating"
        ]
      },
      {
        "q": "איך Helm ו-Argo Rollouts עובדים יחד ב-GitOps release flow?",
        "a": "Helm מרנדר את Kubernetes objects הרצויים ו-Argo CD מסנכרן אותם מ-Git. ה-chart יכול לייצר Rollout object במקום Deployment, יחד עם services ו-AnalysisTemplates. Argo Rollouts מנהל progressive traffic shifting ו-analysis. הגבול החשוב הוא ש-Git מגדיר desired config, בעוד rollout controller מנהל את מצב ה-promotion בזמן אמת.",
        "signals": [
          "Explains Helm, Argo CD, and Argo Rollouts responsibilities",
          "Mentions Rollout and AnalysisTemplate resources",
          "Understands desired state versus rollout state"
        ]
      }
    ]
  },
  {
    "subject": "Practical Tasks",
    "icon": "PT",
    "items": [
      {
        "q": "כתוב flow קצר ל-CI/CD pipeline של Java service.",
        "a": "Flow בסיסי: checkout לקוד, התקנת JDK או בחירת image מתאים, הרצת mvn test או gradle test, בניית artifact עם mvn package או gradle build, שמירת target/*.jar או build/libs/*.jar כ-artifact, פריסה לסביבת test עם config מתאים, ואז smoke test. כל שלב צריך לעצור את ה-pipeline עם exit code לא אפס אם נכשל.",
        "signals": [
          "Includes build, test, package, deploy, and smoke test",
          "Mentions concrete Maven or Gradle commands",
          "Uses exit codes to stop bad releases"
        ]
      },
      {
        "q": "איך תבדוק ש-JAR נבנה ונשמר כ-artifact ב-pipeline?",
        "a": "בודקים בלוגים של שלב build שהפקודה הסתיימה בהצלחה, מריצים ls -lah target/ או ls -lah build/libs/, מוודאים שיש קובץ jar בשם וגרסה צפויים, ובודקים בהגדרות ה-CI שהנתיב הזה מוגדר כ-artifact/output לשלב הבא. אם deploy לא מוצא אותו, בודקים path, working directory, expiration ו-dependencies בין jobs.",
        "signals": [
          "Checks the filesystem path where build outputs are created",
          "Verifies artifact configuration in CI",
          "Mentions path/version mismatch between jobs"
        ]
      },
      {
        "q": "כתוב pseudo-code ל-Python script שמחפש ERROR בקובץ log ונכשל אם נמצאו שגיאות.",
        "a": "Pseudo-code: קבל path דרך argparse, פתח את הקובץ, עבור שורה-שורה, אם 'ERROR' מופיע הדפס את מספר השורה והתוכן וסמן found=true. בסוף אם found החזר exit code 1, אחרת הדפס שהבדיקה עברה והחזר 0. בגרסה אמינה מוסיפים טיפול ב-file not found, הרשאות, וקובץ גדול בלי לקרוא הכל לזיכרון.",
        "signals": [
          "Uses argparse-style input",
          "Streams lines instead of loading the whole file",
          "Returns meaningful exit codes"
        ]
      },
      {
        "q": "איזה commands תריץ כש-service לא עלה אחרי deployment?",
        "a": "תלוי בסביבה, אבל flow בסיסי: בודקים גרסה נפרסת, status של service/process, logs אחרונים, פורט מאזין, ו-health endpoint. לדוגמה: systemctl status app, journalctl -u app --since '10 min ago', ps aux | grep app, ss -lntp, curl -f http://host:port/health. אם זה pipeline, בודקים גם artifact version ו-config שנפרס.",
        "signals": [
          "Starts with service status and recent logs",
          "Checks port and health endpoint",
          "Connects runtime failure to artifact/config"
        ]
      },
      {
        "q": "איך תבדוק אם failure הוא בקוד, ב-CI runner, או בתלויות?",
        "a": "מזהים את השלב המדויק שנכשל ואת הפקודה. אם אותה פקודה נכשלת גם מקומית עם אותו commit, כנראה קוד או tests. אם רק ב-CI, משווים runtime versions, env vars, working directory והרשאות. אם השגיאה היא download/resolve, בודקים repository, network, credentials ו-cache. תמיד מתחילים מהשגיאה הראשונה המשמעותית בלוג.",
        "signals": [
          "Compares local and CI reproduction",
          "Separates runner environment from dependency resolution",
          "Uses first meaningful log error"
        ]
      },
      {
        "q": "כתוב Jenkinsfile בסיסי לשלבי build, test ו-package של Java.",
        "a": "מבנה בסיסי: pipeline עם agent, stages של Checkout, Test ו-Package. בשלב Test מריצים sh 'mvn test'. בשלב Package מריצים sh 'mvn package -DskipTests' אחרי שה-tests עברו, ואז archiveArtifacts artifacts: 'target/*.jar'. מוסיפים post failure כדי להציג הודעה או לשמור logs. לא מכניסים secrets ישירות ל-Jenkinsfile.",
        "signals": [
          "Knows Jenkinsfile stage structure",
          "Uses mvn test/package and archiveArtifacts",
          "Avoids hardcoded secrets"
        ]
      },
      {
        "q": "איך תבנה בדיקת smoke test פשוטה אחרי deployment?",
        "a": "מגדירים בדיקה קצרה שמוודאת שהשירות עונה ופעולה בסיסית עובדת. לדוגמה: curl -f /health, בדיקת /version מול ה-build שנפרס, ואולי API בסיסי שלא משנה state. ה-smoke test צריך להיכשל עם exit code לא אפס כדי לעצור pipeline או לסמן deployment ככושל.",
        "signals": [
          "Uses health/version endpoints",
          "Keeps smoke test short and deterministic",
          "Fails pipeline with non-zero exit code"
        ]
      },
      {
        "q": "איך תעביר ל-QA מידע שימושי אחרי deployment לסביבת test?",
        "a": "שולחים גרסה או commit שנפרסו, שם הסביבה, זמן deployment, קישור ל-pipeline, סטטוס smoke tests, שינויים מרכזיים אם ידועים, וכל issue פתוח שיכול להשפיע על בדיקה. אם deployment נכשל או נעשה rollback, אומרים זאת במפורש במקום לתת ל-QA לגלות לבד.",
        "signals": [
          "Includes version, environment, pipeline, and smoke status",
          "Communicates failures explicitly",
          "Supports QA handoff"
        ]
      },
      {
        "q": "כתוב Bash one-liner שמוצא שגיאות בלוגים מהשעה האחרונה.",
        "a": "אם הלוג הוא systemd: journalctl -u app --since '1 hour ago' | grep -i error. אם זה קובץ רגיל ואין timestamps נוחים: grep -i error /var/log/app.log. בסביבה אמיתית עדיף להשתמש בפורמט timestamp מסודר או כלי logs מרכזי, כי grep על קובץ לא תמיד יודע לסנן לפי שעה.",
        "signals": [
          "Uses journalctl --since for time filtering",
          "Knows grep alone is limited without timestamps",
          "Mentions centralized logs for real systems"
        ]
      },
      {
        "q": "איך תבדוק ש-deploy השתמש ב-config של סביבת test ולא dev?",
        "a": "בודקים את source של config שה-pipeline השתמש בו, environment variables, קובצי properties/yaml שנפרסו, ו-log startup שמדפיס active profile או target environment. אפשר גם לבדוק endpoint לא רגיש שמחזיר version/environment. חשוב לוודא שאין hardcoded dev URL בתוך artifact.",
        "signals": [
          "Checks pipeline config source and runtime env vars",
          "Uses startup logs or safe metadata endpoint",
          "Looks for hardcoded environment values"
        ]
      },
      {
        "q": "איך תכתוב Python wrapper שמריץ command חיצוני ומחזיר כשל אם הוא נכשל?",
        "a": "משתמשים ב-subprocess.run עם list של args, timeout, capture_output לפי צורך ו-check=False כדי לשלוט בהודעה. בודקים result.returncode, מדפיסים stdout/stderr שימושיים, ומחזירים אותו exit code או 1. לא בונים command ממחרוזת לא בטוחה עם shell=True אם יש input חיצוני.",
        "signals": [
          "Uses subprocess.run safely",
          "Handles timeout and returncode",
          "Avoids unsafe shell=True"
        ]
      },
      {
        "q": "מה תבדוק כש-pipeline נכשל רק לפעמים באותו test?",
        "a": "זה נשמע כמו flaky test או תלות בסביבה. בודקים timing, race conditions, שימוש בנתונים משותפים, test order, תלות ברשת או service חיצוני, משאבי runner, ו-timeouts קצרים מדי. מריצים את אותו test כמה פעמים, מבודדים אותו, ואוספים logs כדי להוכיח אם הכשל deterministic או intermittent.",
        "signals": [
          "Identifies flakiness patterns",
          "Checks timing, shared state, and external dependencies",
          "Repeats and isolates the test"
        ]
      },
      {
        "q": "איך תוודא ש-script אוטומציה בטוח להרצה חוזרת?",
        "a": "מכוונים ל-idempotency: לפני יצירה בודקים אם resource כבר קיים, לא מוחקים בלי dry-run או confirmation, משתמשים בגרסאות מפורשות, כותבים logs, ומחזירים exit codes ברורים. אם יש שלבים מסוכנים, מפרידים validate/apply ומוודאים שאפשר להבין מה השתנה.",
        "signals": [
          "Mentions idempotency checks",
          "Uses dry-run for risky changes",
          "Separates validation from applying changes"
        ]
      },
      {
        "q": "איך תחקור מצב שבו deploy הצליח אבל ה-version endpoint מציג גרסה ישנה?",
        "a": "בודקים אם ה-deploy באמת רץ על ה-target הנכון, האם load balancer מפנה ל-instance ישן, האם service restart קרה, האם artifact/tag היה נכון, האם cache/CDN מעורב, והאם ה-version endpoint קורא נתון build נכון. משווים commit/tag ב-pipeline מול מה שרץ בפועל.",
        "signals": [
          "Checks target environment and routing",
          "Verifies artifact/tag and service restart",
          "Compares pipeline version with runtime version"
        ]
      }
    ]
  },
  {
    "subject": "Incident Response",
    "icon": "IR",
    "items": [
      {
        "q": "תאר איך היית מוביל production incident.",
        "a": "מגדירים severity, roles, communication channel, timeline ו-customer impact. מובילים mitigation קודם, מעדכנים stakeholders, מתעדים החלטות, ונמנעים מ-root cause ספקולטיבי בזמן response פעיל.",
        "signals": [
          "Uses incident roles",
          "Prioritizes mitigation",
          "Keeps a timeline"
        ]
      },
      {
        "q": "איך מחליטים אם לעשות rollback, roll forward, או למתן את הבעיה בדרך אחרת?",
        "a": "משווים מה יוריד impact הכי מהר, מה רמת הביטחון, האם יש סיכון ל-data, האם schema compatible ומה הסיכון התפעולי. Rollback לא תמיד הכי בטוח אם data או migrations השתנו.",
        "signals": [
          "Considers data compatibility",
          "Uses impact and confidence",
          "Does not default mechanically"
        ]
      },
      {
        "q": "Production incident התחיל מיד אחרי release, אבל אין ודאות שה-release אשם. איך היית מנהל את הדקות הראשונות?",
        "a": "מכריזים severity ו-incident channel, ממנים incident commander ו-owner טכני, בודקים blast radius ו-user impact, ומשווים telemetry בין versions, regions ו-services. אם rollback הוא mitigation מהיר ובטוח, מבצעים אותו גם בלי root cause מלא. במקביל שומרים timeline ומונעים debugging מפוזר בלי owner.",
        "signals": [
          "Prioritizes mitigation over perfect diagnosis",
          "Uses roles and timeline",
          "Compares versions and blast radius"
        ]
      },
      {
        "q": "איך postmortem טוב נראה אחרי outage משמעותי?",
        "a": "Postmortem טוב הוא blameless אבל לא רך: יש timeline מדויק, impact ברור, contributing factors, מה עבד ומה לא עבד, ו-action items עם owner ותאריך יעד. הוא לא מסתפק ב-human error, אלא מחפש איפה automation, guardrails, observability או architecture אפשרו לטעות להפוך ל-outage.",
        "signals": [
          "Avoids human-error root cause",
          "Requires owners and dates",
          "Looks for systemic fixes"
        ]
      },
      {
        "q": "איך היית מגדיר on-call readiness לצוות שמחזיק platform קריטי?",
        "a": "צריך runbooks עדכניים, dashboards שמראים user impact, alerts עם action ברור, escalation policy, הרשאות emergency, תרגולי incident וידע על rollback או mitigation לכל service מרכזי. Alert שלא מוביל לפעולה צריך להימחק או להשתפר, אחרת הוא יוצר alert fatigue.",
        "signals": [
          "Connects alerts to action",
          "Mentions runbooks and escalation",
          "Prevents alert fatigue"
        ]
      },
      {
        "q": "מה היית עושה אם alert קריטי נורה הרבה פעמים אבל רוב הפעמים הוא false positive?",
        "a": "לא מכבים אותו בלי להבין מה הוא מנסה להגן עליו. בודקים האם threshold לא נכון, metric רועש, חלון זמן קצר מדי או שאין קשר אמיתי ל-user impact. משפרים alert כך שיתבסס על SLO או symptom משמעותי, מוסיפים grouping או burn-rate alerts, ומתעדים מתי כן צריך להעיר on-call.",
        "signals": [
          "Does not blindly disable alerts",
          "Moves toward symptom/SLO alerts",
          "Reduces noise with better thresholds or burn rates"
        ]
      }
    ]
  }
];
