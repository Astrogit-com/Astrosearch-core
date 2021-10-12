// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef BRAVE_BROWSER_TRANSLATE_BRAVE_TRANSLATE_UTILS_H_
#define BRAVE_BROWSER_TRANSLATE_BRAVE_TRANSLATE_UTILS_H_

namespace content {
class BrowserContext;
}
namespace translate {

bool TranslateExtensionIsEnabled(content::BrowserContext* context);

bool ShouldOfferExtensionInstation(content::BrowserContext* context);

bool InternalTranslationIsEnabled(content::BrowserContext* context);

}  // namespace translate

#endif  // BRAVE_BROWSER_TRANSLATE_BRAVE_TRANSLATE_UTILS_H_