"use strict";
function restrictedWords(words) {
    var validator = function (control) {
        if (!words) {
            return null;
        }
        var invalidWords = words.map(function (w) { return control.value.includes(w) ? w : null; })
            .filter(function (w) { return w != null; });
        return invalidWords && invalidWords.length > 0 ?
            { 'restrictedWords': invalidWords.join(', ') } : null;
    };
    return validator;
}
exports.restrictedWords = restrictedWords;
//# sourceMappingURL=restricted-words.validator.js.map