<?php
/**
 * @copyright ©2019 浙江禾匠信息科技
 * Created by PhpStorm.
 * User: Andy - Wangjie
 * Date: 2019/8/27
 * Time: 16:23
 */

namespace app\plugins\vip_card\controllers\api;

use app\controllers\api\filters\LoginFilter;
use app\core\response\ApiCode;
use app\plugins\vip_card\forms\api\CardForm;
use app\plugins\vip_card\forms\api\UserForm;
use app\plugins\vip_card\forms\common\CommonVipCardSetting;
use app\plugins\vip_card\forms\mall\CardDetailForm;

class IndexController extends ApiController
{
    public function behaviors()
    {
        return array_merge(parent::behaviors(), [
            'login' => [
                'class' => LoginFilter::class,
                'ignore' => ['card']
            ],
        ]);
    }

    public function actionIndex()
    {
        $form = new UserForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->getInfo());
    }

    public function actionRight()
    {
        $form = new UserForm();
        return $this->asJson($form->right());
    }

    public function actionCard()
    {
        $form = new CardForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->getCard());
    }

    public function actionCardDetail()
    {
        $form = new CardDetailForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->getDetail());
    }

    public function actionSetting()
    {
        $form = new CommonVipCardSetting();
        $setting = $form->getSetting();
        return $this->asJson([
            'code' => ApiCode::CODE_SUCCESS,
            'data' => $setting,
            'msg' => '获取成功',
        ]);
    }
}