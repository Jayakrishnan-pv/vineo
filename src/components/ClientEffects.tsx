'use client';
import { useHandleScrollEffect } from './hooks/useHandleScrollEffect';
import { useLenisEffect } from './hooks/useLenisEffect';

export default function ClientEffects() {
  useHandleScrollEffect();
  useLenisEffect();
  return null;
}
