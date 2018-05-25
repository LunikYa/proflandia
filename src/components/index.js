import angular from 'angular';
import Login from './login/login.module';
import PersonalArea from './accountPage/accountPage.module';
import Register from './register/register.module';

const rootModule = angular
    .module('app.components', [
        Login,
        Register,
        PersonalArea
    ])
    .name;

export default rootModule;