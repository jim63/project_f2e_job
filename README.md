## <center>An f2e job collection platform with React, Redux and Node.js.</center>



## Technologies
- React
- Redux
- Router
- Node.js
- AWS EC2
- MySQL database
- SSL Certificates

## Features
### Member management
Users can sign up and login by email and password
![image](https://github.com/jim63/project_f2e_job/blob/master/md_photo/login.png?raw=true)

- At front-end, 
  - check the basic validation of email and password
  - check login status by cookies

- At backend, 
  - recognize members by session_id
  - store the salted password hash

### Collect jobs
Collect front jobs from Yourator, Meet.jobs and 104, even they can search jobs across three platforms

![image](https://github.com/jim63/project_f2e_job/blob/master/md_photo/homePage.png?raw=true)

- At front-end,
  - use css flex-box layout

- At backend,
  - web-crawling with Node.js
  - manipulate MsSQL with CRUD

  
### Show detail
Show details of the job, and we provide links to the origin source
![image](https://github.com/jim63/project_f2e_job/blob/master/md_photo/details.png?raw=true)

- At front-end,
	- use Google Maps API 


### Member favorite
Memorize jobs which user like

- Users can fold it, if they think the page is too long
![image](https://github.com/jim63/project_f2e_job/blob/master/md_photo/favorite.png?raw=true)