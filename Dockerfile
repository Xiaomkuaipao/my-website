# 步骤1: 选择一个官方的Node.js 18作为基础镜像
# 这就像选择一个已经预装了厨房设备和厨师（Node.js环境）的空集装箱
FROM node:18-alpine

# 步骤2: 在容器内部创建一个工作目录
# 我们将在/app这个文件夹里进行所有操作
WORKDIR /app

# 步骤3: 复制 package.json 和 package-lock.json 文件
# 先只复制这两个文件，是为了利用Docker的缓存机制，如果这两个文件没变，后续的npm install就不会重复执行，可以加快构建速度
COPY package*.json ./

# 步骤4: 安装应用依赖
# 在容器内部运行npm install，和我们在服务器上手动操作时一样
RUN npm install

# 步骤5: 复制你项目中的所有剩余文件到工作目录
# 把app.js等所有代码都复制进去
COPY . .

# 步骤6: 声明容器对外暴露的端口
# 告诉Docker，这个应用在容器内部监听3000端口
EXPOSE 3000

# 步骤7: 定义容器启动时要执行的命令
# 当容器启动时，自动运行 "node app.js"
CMD [ "node", "app.js" ]