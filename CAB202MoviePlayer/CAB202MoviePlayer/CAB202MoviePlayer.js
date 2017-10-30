/*! CAB202MoviePlayer.js 1.0.0.0
 * 
 */

"use strict";

require(['ss', 'SystemQut_Client'], function(ss, SystemQut_Client) {
  var $global = this;

  // CAB202MoviePlayer.FrameType

  var FrameType = {
    screen: 0, 
    character: 1
  };

  // CAB202MoviePlayer.Reference_$$$_1

  function Reference_$$$_1() {
  }

  var Reference_$$$_1$ = {

  };

  // CAB202MoviePlayer.Util

  function Util() {
  }

  Util.listsEqual_$$$_1 = function(x, y, cmp, xMismatch, yMismatch) {

    if (x.length !== y.length) {
      return false;
    }

    for (var i = 0; i < x.length; i++) {
      var xi = x[i];
      var yi = y[i];
      var eq = cmp(xi, yi);

      if (!eq) {
        xMismatch.item = xi;
        yMismatch.item = yi;
        return false;
      }

    }

    return true;
  };

  // CAB202MoviePlayer.MoviePlayer

  function MoviePlayer(container) {
    this._screenPlay = [];
    this._screensAtTimeSteps = [];
    this._screenCount = 0;
    this._firstScreen = 0;
    this._frameIdx = 0;
    this._isPlaying = false;
    this._maxTime = 0;
    this._currentTime = 0;
    this._timeout = undefined;
    this._container = container;
    this._displayArea = this._getChildById_$$$_1('div', 'displayArea');
    this._screenHolder = this._getChildById_$$$_1('div', 'screenHolder');
    this._movieTitle = this._getChildById_$$$_1('p', 'movieTitle');
    this._screen = this._getChildById_$$$_1('textarea', 'screen');
    this._currentTimeLabel = this._getChildById_$$$_1('span', 'currentTimeLabel');
    this._maxTimeLabel = this._getChildById_$$$_1('span', 'maxTimeLabel');
    this._keyDisplay = this._getChildById_$$$_1('p', 'keyDisplay');
    this._playButton = this._getChildById_$$$_1('button', 'playButton');
    this._playButton.addEventListener('click', ss.bind('_playButtonClicked', this), false);
    this._screenHolder.style.display = 'block';
    this._fileControl = this._getChildById_$$$_1('input', 'fileControl');
    this._fileControl.addEventListener('change', ss.bind('_fileUploadChanged', this), false);
    this._slider = this._getChildById_$$$_1('input', 'slider');
    this._slider.addEventListener('change', ss.bind('_sliderChanged', this), false);
    this.add_propertyChanged(ss.bind('_moviePlayer_PropertyChanged', this));
  }

  var MoviePlayer$ = {
    add_propertyChanged: function(value) {
      this.___propertyChanged = ss.bindAdd(this.___propertyChanged, value);
    },
    remove_propertyChanged: function(value) {
      this.___propertyChanged = ss.bindSub(this.___propertyChanged, value);
    },
    _sliderChanged: function(e) {
      var t = parseFloat(this._slider.value);
      var step = parseFloat(this._slider.step);
      var steps = Math.floor(this._maxTime / step);
      var screenIdx = Math.floor(t * steps / this._maxTime);
      this.set__frameIdx(this._screensAtTimeSteps[screenIdx]);
    }
    ,
    _moviePlayer_PropertyChanged: function(sender, args) {

      if ((args.get_propertyNames().indexOf('ScreenPlay') >= 0)) {
        this._screenPlayChanged();
      }

      if ((args.get_propertyNames().indexOf('FrameIdx') >= 0)) {
        this._frameIdxChanged();
      }

      if ((args.get_propertyNames().indexOf('IsPlaying') >= 0)) {
        this._isPlayingChanged();
      }

    }
    ,
    _isPlayingChanged: function() {
      this._playButton.textContent = (this._isPlaying) ? 'Pause' : 'Play';

      if (this._isPlaying) {
        this._advance();
      }

    }
    ,
    _frameIdxChanged: function() {
      this._currentTime = (this._frameIdx < this._screenPlay.length) ? this._screenPlay[this._frameIdx].timeStamp : 0;
      console.log('MoviePlayer_PropertyChanged: currentTime = ' + this._currentTime);
      this._currentTimeLabel.textContent = this._currentTime.toFixed(2);
      this._slider.value = this._currentTime.toFixed(2);
      this._refresh();
    }
    ,
    _screenPlayChanged: function() {
      this._maxTime = this._screenPlay[this._screenPlay.length - 1].timeStamp;
      this._isPlaying = false;
      this._frameIdx = this._firstScreen;
      this._slider.value = (0).toString();
      var maxTimeText = (this._screenPlay.length > 0) ? this._maxTime.toFixed(2) : (0).toString();
      this._slider.setAttribute('max', maxTimeText);
      this._maxTimeLabel.textContent = maxTimeText;
      this._screensAtTimeSteps.length = 0;
      var step = parseFloat(this._slider.step);
      var steps = Math.floor(this._maxTime / step);
      var i = 0;

      for (var t = 0; t < this._maxTime; t += step) {
        while (i < this._screenPlay.length) {
          var f = this._screenPlay[i];

          if (!f.frameType && f.timeStamp >= t) {
            this._screensAtTimeSteps.push(i);
            break;
          }

          i++;
        }
      }

      this._updateTitle();
      this._refresh();
    }
    ,
    _advance: function() {

      if (this._isPlaying) {
        this.set__frameIdx(this.get__frameIdx() + 1) - 1;

        if (this._frameIdx < this._screenPlay.length - 1) {
          var currentPlayTime = this._screenPlay[this._frameIdx].timeStamp;
          var nextPlayTime = this._screenPlay[this._frameIdx + 1].timeStamp;
          setTimeout(ss.bind('_advance', this), Math.floor((nextPlayTime - currentPlayTime) * 1000));
        }
        else {
          this.set_isPlaying(false);
        }

      }

    }
    ,
    _refresh: function() {

      if (this._frameIdx < this._screenPlay.length) {
        var currentFrame = this._screenPlay[this._frameIdx];

        if (!currentFrame.frameType) {
          this._refreshScreen(currentFrame);
        }
        else {
          this._refreshKey(currentFrame);
        }

      }

    }
    ,
    _refreshKey: function(currentFrame) {
      var ch = currentFrame.charCode;

      if (ch > 0) {

        if (ss.isValue(this._timeout)) {
          clearTimeout(this._timeout);
          this._timeout = undefined;
        }

        this._keyDisplay.innerText = ss.format('Key: {0}  {1}', ch, String.fromCharCode(ch));
        this._timeout = setTimeout(ss.bind('_clearKeyDisplay', this), 500);
      }

    }
    ,
    _clearKeyDisplay: function() {
      this._keyDisplay.innerHTML = '&nbsp;';
    }
    ,
    _refreshScreen: function(currentFrame) {
      this._screen.textContent = '';
      this._screen.rows = currentFrame.height;
      this._screen.cols = currentFrame.width;

      for (var i = 0; i < currentFrame.height; i++) {
        this._screen.textContent += currentFrame.cells[i];
        this._screen.textContent += '\n';
      }

    }
    ,
    _fileUploadChanged: function(e) {

      if (this._fileControl.files.length >= 1) {
        this._file = this._fileControl.files[0];
        this._parseFile(this._file);
        this._updateTitle();
      }

    }
    ,
    get__frameIdx: function() {
      return this._frameIdx;
    }
    ,
    set__frameIdx: function(value) {
      var oldValue = this._frameIdx;
      this._frameIdx = Math.min(Math.max(value, 0), this._screenPlay.length);

      if (this._frameIdx !== oldValue) {
        this._notifyPropertyChanged('FrameIdx');
      }

      return value;
    }
    ,
    _parseFile: function(file) {
      var $this = this;

      var reader = new FileReader();
      reader.onload = function(evt) {
        var text = reader.result;
        var sr = new SystemQut_Client.StringReader(text);
        $this._screenPlay.length = 0;
        $this._screenCount = 0;
        $this._firstScreen = undefined;
        var currentFrame;
        var startTime = 0;
        while (null !== (currentFrame = Frame.parse(sr))) {

          if (!$this._screenPlay.length) {
            startTime = currentFrame.timeStamp;
          }

          currentFrame.timeStamp -= startTime;

          if (!currentFrame.frameType) {

            if (!ss.isValue($this._firstScreen)) {
              $this._firstScreen = $this._screenPlay.length;
            }

            $this._screenCount++;
          }

          $this._screenPlay.push(currentFrame);
        }
        while ($this._screenPlay.length > 0 && $this._screenPlay[$this._screenPlay.length - 1].frameType === 1) {
          $this._screenPlay.length--;
        }
        $this._notifyPropertyChanged('ScreenPlay');
      };
      reader.readAsText(file);
    }
    ,
    _notifyPropertyChanged: function(properties) {

      if (this.___propertyChanged != null) {
        this.___propertyChanged(this, new SystemQut_Client.PropertyChangedEventArgs(properties));
      }

    }
    ,
    _updateTitle: function() {
      this._movieTitle.textContent = ss.format('{0} ({1} bytes; {2} frames)', this._file.name, this._file.size, this._screenCount);
    }
    ,
    _playButtonClicked: function(e) {

      if (!this._screenPlay.length) {
        return;
      }

      this.set_isPlaying(!this._isPlaying);
    }
    ,
    _getChildById_$$$_1: function(tagName, id) {
      var children = this._container.getElementsByTagName(tagName);

      for (var i = 0; i < children.length; i++) {
        var e = children[i];

        if (e.id === id) {
          return e;
        }

      }

      return null;
    }
    ,
    get_isPlaying: function() {
      return this._isPlaying;
    }
    ,
    set_isPlaying: function(value) {
      var oldValue = this._isPlaying;

      if (value !== oldValue) {
        this._isPlaying = value;
        this._notifyPropertyChanged('IsPlaying');
      }

      return value;
    }

  };

  // CAB202MoviePlayer.Frame

  function Frame() {
    this.frameType = 0;
    this.timeStamp = 0;
    this.width = 0;
    this.height = 0;
    this.charCode = 0;
  }

  Frame.areEqual = function(x, y) {

    if (x === y) {
      return true;
    }

    if (x == null && y != null) {
      return false;
    }

    if (x != null && y == null) {
      return false;
    }

    return false;
  };

  Frame.parse = function(reader) {
    var s = reader.readLine();
    while (s != null && !ss.startsWith(s, 'Frame(') && !ss.startsWith(s, 'Char(')) {
      s = reader.readLine();
    }

    if (s == null) {
      return null;
    }

    var frame = new Frame();
    var delimiters = [ '(', ',', ')' ];
    var tokens = s.split(new RegExp('[\\(,\\)]'));

    if (tokens.length >= 3 && tokens[0] === 'Char') {
      frame.frameType = 1;
      frame.charCode = parseInt(tokens[1]);
      frame.timeStamp = parseFloat(tokens[2]);
    }
    else 
    if (tokens.length >= 4 && tokens[0] === 'Frame') {
      frame.frameType = 0;
      frame.width = parseInt(tokens[1]);
      frame.height = parseInt(tokens[2]);
      frame.timeStamp = parseFloat(tokens[3]);
      frame.cells = [];
      var frameIdx = 0;
      s = reader.readLine();
      while (s != null && !ss.startsWith(s, 'EndFrame')) {

        if (frameIdx < frame.height) {
          frame.cells[frameIdx++] = s;
        }

        s = reader.readLine();
      }
    }
    else {
      console.log('Expected Char or Frame declaration');
      console.log(ss.format('Input text: ((({0})))', s));
    }

    return frame;
  };

  var Frame$ = {
    toString: function() {
      var sb = new ss.StringBuilder();

      if (this.frameType === 1) {
        sb.append(ss.format('Char({0},{1})\n', this.charCode, this.timeStamp));
      }
      else {
        sb.append(ss.format('Frame({0},{1},{2})\n', this.width, this.height, this.timeStamp));

        for (var y = 0; y < this.height; y++) {
          sb.append(this.cells[y]);
          sb.append('\n');
        }

        sb.append('EndFrame\n');
      }

      return sb.toString();
    }
    ,
    _getConnectedParts: function(frame) {
      return null;
    }

  };

  // CAB202MoviePlayer.Main

  function Main() {
  }

  Main.run = function() {
    var diff = new MoviePlayer(document.getElementById('moviePlayer'));
  };

  var $exports = ss.module('CAB202MoviePlayer', null,
    {
      FrameType: FrameType,
      Reference_$$$_1: [ Reference_$$$_1, Reference_$$$_1$, null ],
      Util: [ Util, null, null ],
      MoviePlayer: [ MoviePlayer, MoviePlayer$, null, SystemQut_Client.INotifyPropertyChanged ],
      Frame: [ Frame, Frame$, null ],
      Main: [ Main, null, null ]
    });



  Main.run();
});
