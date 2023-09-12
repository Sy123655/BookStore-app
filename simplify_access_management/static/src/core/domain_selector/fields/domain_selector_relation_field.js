/** @odoo-module **/

import { registry } from "@web/core/registry";
import { DomainSelectorFieldInput } from "@web/core/domain_selector/fields/domain_selector_field_input";
import { DomainSelectorFieldInputWithTags } from "@web/core/domain_selector/fields/domain_selector_field_input_with_tags";

import { Component } from "@odoo/owl";

const dso = registry.category("domain_selector/operator");

export class DomainSelectorRelationField extends Component {}
Object.assign(DomainSelectorRelationField, {
    template: "web.DomainSelectorRelationField",
    components: {
        DomainSelectorFieldInput,
        DomainSelectorFieldInputWithTags,
    },

    onDidTypeChange() {
        return { value: "0" };
    },
    getOperators() {
        return ["=", "!=", "ilike", "not ilike", "set", "not set", "in", "not in"].map((key) => dso.get(key));
    },
});

registry
    .category("domain_selector/fields")
    .add("one2many", DomainSelectorRelationField)
    .add("many2one", DomainSelectorRelationField)
    .add("many2many", DomainSelectorRelationField);
