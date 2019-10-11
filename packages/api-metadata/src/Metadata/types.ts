// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Vec from '@polkadot/types/codec/Vec';
import { Codec } from '@polkadot/types/types';

export interface MetadataInterface<Modules extends Codec> extends Codec {
  modules: Vec<Modules>;
}
