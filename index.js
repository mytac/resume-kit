const fs = require('fs');
const prompts = require('prompts');

(async function () {
  const options = [
    {
      type: 'text',
      name: 'theme',
      message: 'Please input the theme name',
      initial: 'light',
      format: v => `${v}`,
    },
    {
      type: 'confirm',
      name: 'isChinese',
      initial: true,
      message: 'Is the default language Chinese?',
    },
    {
      type: 'confirm',
      name: 'isGenerate',
      initial: true,
      message: 'Is generate data template?',
    },
  ];

  console.log('Initial configuration...');
  const answer = await prompts(options);
  if(answer.isGenerate){
    answer.resumeConfig=resumeConfig
  }
  const answersString = JSON.stringify(answer, null, 4);
  console.log('answersString', answersString);

  fs.writeFile('resume-config.json', answersString, () => {
    console.log(answersString);
  });
}());

const resumeConfig={
  "name":"小A",
  "sex":"男",
  "age":"18",
  "job":"FRONT-END DEVELOPER",
  "place":"大溪地",
  "avatar":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531139433009&di=e86d7a6f0662bc0a5989b4f40745a44f&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201601%2F04%2F20160104154736_XRShM.jpeg",
  "college":{
      "date":"2010.1~2014.1",
      "school":"学校名字",
      "academy":"学院名",
      "subject":"专业名",
      "description":"简单描述"
  },
  "contact":{
      "tel":"13111011011",
      "email":"my_tac@126.com",
      "github":"github.com/mytac",
      "wechat":"tac_coolzjz"
  },
  "experience":[
      {
          "date":"2010.1",
          "project":"项目名0",
          "descrition":[
              "我干了啥啥啥",
              "在这期间取得了什么成就",
              "这里不要写太多的项目，找有亮点的写！"
          ]
      },
      {
          "date":"2010.2",
          "project":"项目名",
          "descrition":[
              "我干了啥啥啥",
              "在这期间取得了什么成就"
          ]
      }
  ],
  "career":[
      {
          "date":"2010.1",
          "company":"公司名",
          "job":"前端开发",
          "descrition":[
              "我干了啥啥啥",
              "在这期间取得了什么成就"
          ]
      },
      {
          "date":"2010.2",
          "company":"公司名",
          "job":"前端开发",
          "descrition":[
              "我干了啥啥啥",
              "在这期间取得了什么成就"
          ]
      }
  ],
  "skills":{
      "react":0.7,
      "vue":0.3,
      "webpack":0.7
  },
  "other":"这里写点备注的东西"
}