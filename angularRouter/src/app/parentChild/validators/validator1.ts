import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';

export function usernameValidator(formControl: FormControl): any {
    const valid: boolean = formControl.value === 'aaaaaa';
    return valid ? null : { ifRight: { descs: '用户名不正确,同步' } };
}
// 异步校验器
export function usernameValidator1(formControl: FormControl): any {
    const valid: boolean = formControl.value === 'aaaaaa';
    console.log(valid);
    return Observable.of(valid ? null : { ifRight1: { descs: '用户名不正确，异步' } }).delay(5000);
}

export function equalValidator(group: FormGroup): any {
    const password = group.get('password') as FormControl;
    const pconfirm = group.get('pconfirm') as FormControl;
    const valid: boolean = password.value === pconfirm.value;
    console.log('密码校验结果', valid);
    return valid ? null : { equal: { descxxx: '两个密码不匹配' } };
}

export function mobileValidator(formControl: FormControl): any {
    const valid: boolean = formControl.value === '123456';
    return valid ? null : { ifRight: { descs: '密码不正确' } };
}
