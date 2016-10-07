define(function (require) {
    'use strict';

    const
        ModuleView = require('common/platform/ModuleView');

    return class extends ModuleView {
        started () {
            return Promise.resolve(super.started()).then(() => {
                // after some algorithm
                this.goto('chamber1');
            });
        }
    };
});