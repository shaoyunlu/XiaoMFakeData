const { execSync } = require('child_process');
const fs = require('fs');


// 提交到GitHub
execSync('git add .');
execSync('git commit -m "Release version"');
execSync('git push');

// 上传到云服务器
execSync('pscp -l root -i C:\\Users\\Administrator\\.ssh\\putty.ppk  -r F:\\github\\XiaoMFakeData\\src\\* 114.116.50.8:/syl/web-3100/src')
