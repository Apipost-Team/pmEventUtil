# pmEventUtil
基于 window.postmessage 简单封装，提供2个对外方法（listen/send）方便进行简单调用。

# send 

示例：

`(new pmEventUtil).send('myChannel', data, function(err){
    // console.log(err)
}); `

# send 

示例：
`(new pmEventUtil).listen('myChannel', function(data){
    console.log(data)
});`

