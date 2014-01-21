node main.js
xcopy  .\output\*.* ..\..\assets\durandal\app /s /y
del ..\..\assets\durandal\app\php /s /q /f
rd ..\..\assets\durandal\app\php\controllers
rd ..\..\assets\durandal\app\php\models
rd ..\..\assets\durandal\app\php
xcopy  .\output\php\*.* ..\..\application\ /s /y

