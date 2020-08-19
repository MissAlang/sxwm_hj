<?php
/**
 * @copyright (c)天幕网络
 * @author Lu Wei
 * @link http://www.67930603.top/
 * Created by IntelliJ IDEA
 * Date Time: 2018/12/7 14:03
 */


namespace app\controllers\api;

use app\forms\api\BuyDataForm;
use app\forms\api\ConfigForm;
use app\forms\api\IndexForm;

class IndexController extends ApiController
{
    public function behaviors()
    {
        return array_merge(parent::behaviors(), [
        ]);
    }

    public function actionConfig()
    {
        return (new ConfigForm())->search();
    }

    public function actionPurchase()
    {
        return (new BuyDataForm())->search();
    }

    public function actionIndex()
    {
        $form = new IndexForm();
        $form->attributes = \Yii::$app->request->get();
        return $this->asJson($form->getIndex());
    }
}
