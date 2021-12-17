/* Copyright (c) 2021 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

#ifndef BRAVE_VENDOR_BAT_NATIVE_ADS_SRC_BAT_ADS_INTERNAL_TOKENS_ISSUERS_ISSUERS_DELEGATE_H_
#define BRAVE_VENDOR_BAT_NATIVE_ADS_SRC_BAT_ADS_INTERNAL_TOKENS_ISSUERS_ISSUERS_DELEGATE_H_

namespace ads {

struct IssuersInfo;

class IssuersDelegate {
 public:
  virtual ~IssuersDelegate() = default;

  // Invoked to tell the delegate we successfuly retrieved the issuers
  virtual void OnDidGetIssuers(const IssuersInfo& issuers) {}

  // Invoked to tell the delegate we failed to retrieve the issuers
  virtual void OnFailedToGetIssuers() {}
};

}  // namespace ads

#endif  // BRAVE_VENDOR_BAT_NATIVE_ADS_SRC_BAT_ADS_INTERNAL_TOKENS_ISSUERS_ISSUERS_DELEGATE_H_