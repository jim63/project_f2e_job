<p style="text-align:center;font-size:20px">An online multiplayer bridge game with React, Redux and Node.js.</p>


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
![image](https://github.com/jim63/project_f2e_job/blob/master/md_photo/login.png?raw=true)
Users can sign up and login by email and password

- At front-end, 
  - check the validation of email and password
  - check login status by cookies

- At backend, 
  - recognize members by session_id
  - store the salted password hash

### Collect jobs
Collect front jobs from Yourator, Meet.jobs and 104, and you can fold if there are too many jobs

At front-end,
  - use css flex-box layout

- At backend,
  - web-crawling with Node.js
  - manipulate MsSQL with CRUD


### Search jobs across three platforms
Quickly find the front-end job opportunities by the company name

### Member favorite
Memorize jobs which user like