/* eslint-disable no-undef */
import indicator, { Warlock, Mage, Witch } from '../app';

test('Определение состояния здоровья героя', () => {
  expect(indicator(Warlock)).toBe('Чародей healthy');
});

test('Определение состояния здоровья героя', () => {
  expect(indicator(Mage)).toBe('Маг wounded');
});

test('Определение состояния здоровья героя', () => {
  expect(indicator(Witch)).toBe('Ведьма critical');
});
