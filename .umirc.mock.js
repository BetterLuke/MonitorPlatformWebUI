const fake_maillog = {
    data:[
        {
            id: 1,
            title: "邮件模块报警",
            description: "邮件模块请求失败",
        },
    ]
}


export default {
    '/api/maillog'(req,res) {
        res.json(fake_maillog)
    }
};
