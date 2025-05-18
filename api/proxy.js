export default async (req, res) => {
    const { user, pass, count } = req.query;
    
    // 验证参数
    if (!user || !pass || !count) {
        return res.status(400).send("缺少必要参数");
    }

    try {
        // 调用原始API
        const apiUrl = `http://api.mmp.cc/api/ZeppLife?user=${user}&pass=${pass}&count=${count}`;
        const response = await fetch(apiUrl);
        const data = await response.text();
        
        // 返回原始API响应
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send("API请求失败: " + error.message);
    }
};