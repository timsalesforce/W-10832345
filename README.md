# W-10832345 Repro steps
 - Clone the repo
 - Deploy the code using `sfdx force:source:deploy -x package.xml`
 - Observe the deployment will succeed
 - Now uncomment the lines in CustomLabels.labels-meta.xml
 - Also uncomment the lines in WithLabel.cls
 - In package.xml, change the CustomLabel members to 'Label2'
 - Finally uncomment the lines in testLWC.js
 - Deploy again using `sfdx force:source:dploy -x package.xml`
 - Observe that the deployment fails for the Class
