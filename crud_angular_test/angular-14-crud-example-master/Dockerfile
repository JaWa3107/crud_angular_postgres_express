FROM tomcat:latest
RUN cp -R /usr/local/tomcat/webapps.dist/* /usr/local/tomcat/webapps
RUN mkdir /usr/local/tomcat/webapps/angular-14-crud-example-master
ADD dist /usr/local/tomcat/webapps/angular-14-crud-example-master
