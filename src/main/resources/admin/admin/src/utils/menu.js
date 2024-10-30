


















const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"NBA类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryNba"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"新闻类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryNews"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"papi酱视频类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryPapi"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"体育类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryTiyu"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"艺术类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryYishu"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"娱乐类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryYule"
                    }

                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"NBA管理",
                        "menuJump":"列表",
                        "tableName":"nba"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"NBA留言管理",
                        "menuJump":"列表",
                        "tableName":"nbaLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"NBA收藏管理",
                        "menuJump":"列表",
                        "tableName":"nbaCollection"
                    }
                ],
                "menu":"NBA管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"新闻信息管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"新闻信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"papi酱视频管理",
                        "menuJump":"列表",
                        "tableName":"papi"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"papi酱视频留言管理",
                        "menuJump":"列表",
                        "tableName":"papiLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"papi酱视频收藏管理",
                        "menuJump":"列表",
                        "tableName":"papiCollection"
                    }
                ],
                "menu":"papi酱视频管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"体育管理",
                        "menuJump":"列表",
                        "tableName":"tiyu"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"体育留言管理",
                        "menuJump":"列表",
                        "tableName":"tiyuLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"体育收藏管理",
                        "menuJump":"列表",
                        "tableName":"tiyuCollection"
                    }
                ],
                "menu":"体育管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"艺术管理",
                        "menuJump":"列表",
                        "tableName":"yishu"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"艺术留言管理",
                        "menuJump":"列表",
                        "tableName":"yishuLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"艺术收藏管理",
                        "menuJump":"列表",
                        "tableName":"yishuCollection"
                    }
                ],
                "menu":"艺术管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"娱乐管理",
                        "menuJump":"列表",
                        "tableName":"yule"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"娱乐留言管理",
                        "menuJump":"列表",
                        "tableName":"yuleLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"娱乐收藏管理",
                        "menuJump":"列表",
                        "tableName":"yuleCollection"
                    }
                ],
                "menu":"娱乐管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"新闻信息管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"新闻信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"NBA管理",
                        "menuJump":"列表",
                        "tableName":"nba"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"NBA留言管理",
                        "menuJump":"列表",
                        "tableName":"nbaLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"NBA收藏管理",
                        "menuJump":"列表",
                        "tableName":"nbaCollection"
                    }
                ],
                "menu":"NBA管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"papi酱视频管理",
                        "menuJump":"列表",
                        "tableName":"papi"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"papi酱视频留言管理",
                        "menuJump":"列表",
                        "tableName":"papiLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"papi酱视频收藏管理",
                        "menuJump":"列表",
                        "tableName":"papiCollection"
                    }
                ],
                "menu":"papi酱视频管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"体育管理",
                        "menuJump":"列表",
                        "tableName":"tiyu"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"体育留言管理",
                        "menuJump":"列表",
                        "tableName":"tiyuLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"体育收藏管理",
                        "menuJump":"列表",
                        "tableName":"tiyuCollection"
                    }
                ],
                "menu":"体育管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"艺术管理",
                        "menuJump":"列表",
                        "tableName":"yishu"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"艺术留言管理",
                        "menuJump":"列表",
                        "tableName":"yishuLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"艺术收藏管理",
                        "menuJump":"列表",
                        "tableName":"yishuCollection"
                    }
                ],
                "menu":"艺术管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"娱乐管理",
                        "menuJump":"列表",
                        "tableName":"yule"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"娱乐留言管理",
                        "menuJump":"列表",
                        "tableName":"yuleLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"娱乐收藏管理",
                        "menuJump":"列表",
                        "tableName":"yuleCollection"
                    }
                ],
                "menu":"娱乐管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"用户",
        "tableName":"yonghu"
    }
]
    }
}
export default menu;
