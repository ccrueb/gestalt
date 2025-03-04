// @flow
import React from 'react';
import { mount } from 'enzyme';
import VideoControls from './VideoControls.js';

test('VideoControls handles play events', () => {
  const mockOnPlay = jest.fn();
  const wrapper = mount(
    <VideoControls
      accessibilityMaximizeLabel="Maximize"
      accessibilityMinimizeLabel="Minimize"
      accessibilityMuteLabel="Mute"
      accessibilityPauseLabel="Pause"
      accessibilityPlayLabel="Play"
      accessibilityUnmuteLabel="Unmute"
      currentTime={67.3}
      duration={67.3}
      fullscreen={false}
      onFullscreenChange={() => {}}
      onPause={() => {}}
      onPlay={mockOnPlay}
      onPlayheadDown={() => {}}
      onPlayheadUp={() => {}}
      onVolumeChange={() => {}}
      playing={false}
      seek={() => {}}
      volume={0}
    />
  );
  wrapper.find('Icon[icon="play"]').simulate('click');
  expect(mockOnPlay).toHaveBeenCalled();
});

test('VideoControls handles pause events', () => {
  const mockOnPause = jest.fn();
  const wrapper = mount(
    <VideoControls
      accessibilityMaximizeLabel="Maximize"
      accessibilityMinimizeLabel="Minimize"
      accessibilityMuteLabel="Mute"
      accessibilityPauseLabel="Pause"
      accessibilityPlayLabel="Play"
      accessibilityUnmuteLabel="Unmute"
      currentTime={67.3}
      duration={67.3}
      fullscreen={false}
      onFullscreenChange={() => {}}
      onPause={mockOnPause}
      onPlay={() => {}}
      onPlayheadDown={() => {}}
      onPlayheadUp={() => {}}
      onVolumeChange={() => {}}
      playing
      seek={() => {}}
      volume={0}
    />
  );
  wrapper.find('Icon[icon="pause"]').simulate('click');
  expect(mockOnPause).toHaveBeenCalled();
});

test('VideoControls handles volume events', () => {
  const mockOnVolumeChange = jest.fn();
  const wrapper = mount(
    <VideoControls
      accessibilityMaximizeLabel="Maximize"
      accessibilityMinimizeLabel="Minimize"
      accessibilityMuteLabel="Mute"
      accessibilityPauseLabel="Pause"
      accessibilityPlayLabel="Play"
      accessibilityUnmuteLabel="Unmute"
      currentTime={67.3}
      duration={67.3}
      fullscreen={false}
      onFullscreenChange={() => {}}
      onPause={() => {}}
      onPlay={() => {}}
      onPlayheadDown={() => {}}
      onPlayheadUp={() => {}}
      onVolumeChange={mockOnVolumeChange}
      playing={false}
      seek={() => {}}
      volume={0}
    />
  );
  wrapper.find('Icon[icon="mute"]').simulate('click');
  expect(mockOnVolumeChange).toHaveBeenCalled();
});
