const fs = require('fs').promises
class JsonReader{
static async getTestDataByUserName(filepath, username) {
    try {
        const testdata = await fs.readFile(filepath, 'utf-8')
        const users = JSON.parse(testdata)
        console.log("users:"+users)
        return users.find(user => user.username === username)
    } catch (error) {
        console.error('Error reading JSON file:', error);
        return null;
    }
}
}

module.exports={JsonReader};