import {internalVocabulary} from "@errors/dictionaries/internals";
import {badRequestVocabulary} from "@errors/dictionaries/bad-requests";
import {secureVocabulary} from "@errors/dictionaries/secure";
import {notFoundRequestVocabulary} from "@errors/dictionaries/not-found";

export const errors = {
  ...internalVocabulary,
  ...badRequestVocabulary,
  ...secureVocabulary,
  ...notFoundRequestVocabulary,
};
