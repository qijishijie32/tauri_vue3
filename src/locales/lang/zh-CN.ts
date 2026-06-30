export default {
  app: {
    toggleTheme: '切换主题',
    fullscreen: '全屏',
    logout: '退出登录',
    logoutSuccess: '已退出登录',
    languageSwitched: '语言切换成功'
  },
  route: {
    root: '首页',
    login: '登录',
    dashboard: '工作台',
    about: '关于',
    demo: '功能演示',
    notFound: '页面不存在',
    untitled: '未命名页面'
  },
  login: {
    title: '欢迎使用 Tauri Vue3 脚手架',
    username: '用户名',
    password: '密码',
    usernamePlaceholder: '请输入用户名',
    passwordPlaceholder: '请输入密码',
    usernameRequired: '请输入用户名',
    passwordRequired: '请输入密码',
    submit: '登录',
    success: '登录成功'
  },
  dashboard: {
    title: '工作台',
    description: '这里展示 Tauri 命令调用与系统信息。',
    welcome: '欢迎来到 Tauri + Vue3',
    callGreet: '调用 greet 命令',
    greetDone: 'greet 调用成功',
    greetPlaceholder: '点击按钮调用后端命令',
    os: '操作系统',
    arch: '架构',
    version: '系统版本',
    hostname: '主机名',
    family: '系统家族',
    locale: '语言环境'
  },
  about: {
    title: '关于项目',
    description: '当前脚手架技术栈信息一览。',
    name: '技术项',
    version: '版本',
    desc: '说明'
  },
  demo: {
    title: '功能演示',
    description: '演示 HTTP、Tauri 文件读写以及 Pinia 状态。',
    httpDemo: 'HTTP 请求演示',
    sendRequest: '发送请求',
    httpFailed: '请求失败，请检查网络或 API 地址配置',
    piniaDemo: 'Pinia 状态演示',
    count: '计数器',
    fileDemo: 'Tauri 文件读写演示',
    filePathPlaceholder: '请输入文件路径，例如 demo.txt',
    fileContent: '文件内容',
    writeFile: '写入文件',
    readFile: '读取文件',
    writeSuccess: '写入成功',
    readSuccess: '读取成功'
  },
  error: {
    notFound: '404 页面不存在',
    notFoundDesc: '请检查访问路径是否正确。',
    backHome: '返回首页'
  }
};
