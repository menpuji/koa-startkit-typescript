const Router = require('koa-router');
const indexCtrl = require('../controllers/indexCtrl');

const router = Router()

router.get('/', indexCtrl.default)

export default router
