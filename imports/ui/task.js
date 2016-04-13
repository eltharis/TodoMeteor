/**
 * Created by wpr on 07.04.16.
 */

import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';

import './task.html';

Template.task.events({
    "click .toggle-checked"() {
        Tasks.update(this._id, {
            $set: {checked: !this.checked}
        });
    },
    "click .delete"() {
        Tasks.remove(this._id);
    }
});