/*! SystemQut_Client.js 1.0.0.0
 * 
 */

"use strict";

define('SystemQut_Client', ['ss'], function(ss) {
  var $global = this;

  // SystemQut.Fuzzy

  var Fuzzy = {
    maybe: 0, 
    no: 1, 
    yes: 2
  };

  // SystemQut.Xml.XmlNodeType

  var XmlNodeType = {
    none: 0, 
    element: 1, 
    attribute: 2, 
    text: 3, 
    CDATA: 4, 
    entityReference: 5, 
    entity: 6, 
    processingInstruction: 7, 
    comment: 8, 
    document: 9, 
    documentType: 10, 
    documentFragment: 11, 
    notation: 12, 
    whitespace: 13, 
    significantWhitespace: 14, 
    endElement: 15, 
    endEntity: 16, 
    xmlDeclaration: 17
  };

  // SystemQut.ComponentModel.DataBindingMode

  var DataBindingMode = {
    oneWay: 1, 
    twoWay: 2
  };

  // SystemQut.Controls.VerticalAlignment

  var VerticalAlignment = {
    top: 0, 
    middle: 1, 
    bottom: 2
  };

  // SystemQut.Controls.HorizontalAlignment

  var HorizontalAlignment = {
    left: 0, 
    center: 1, 
    right: 2
  };

  // SystemQut.Svg.SvgLengthType

  var SvgLengthType = {
    unknown: 0, 
    number: 1, 
    percentage: 2, 
    EM: 3, 
    EX: 4, 
    PX: 5, 
    CM: 6, 
    MM: 7, 
    IN: 8, 
    PT: 9, 
    PC: 10
  };

  // SystemQut.IEquatable_$$$_1

  function IEquatable_$$$_1() { }

  // SystemQut.ITypedArray_$$$_1

  function ITypedArray_$$$_1() { }

  // SystemQut.IComparable

  function IComparable() { }

  // SystemQut.Collections.Generic.IComparer_$$$_1

  function IComparer_$$$_1() { }

  // SystemQut.Collections.Generic.ISet_$$$_1

  function ISet_$$$_1() { }

  // SystemQut.ComponentModel.INotifyPropertyChanged

  function INotifyPropertyChanged() { }

  // SystemQut.Controls.ICodeBehind

  function ICodeBehind() { }

  // SystemQut.Svg.ISvgAnimatedLength

  function ISvgAnimatedLength() { }

  // SystemQut.Svg.ISvgAnimatedRect

  function ISvgAnimatedRect() { }

  // SystemQut.Svg.ISvgLength

  function ISvgLength() { }

  // SystemQut.Svg.ISvgMatrix

  function ISvgMatrix() { }

  // SystemQut.Svg.ISvgRect

  function ISvgRect() { }

  // SystemQut.Arrays

  function Arrays() {
  }

  Arrays.clone_$$$_1 = function(collection) {

    if (collection.length !== undefined) {
      var array = collection;
      var length = array.length;
      var clone = new Array(length);

      for (var i = 0; i < length; i++) {
        clone[i] = array[i];
      }

      return clone;
    }
    else {
      var clone = new Array(0);

      var $enum1 = ss.enumerate(collection);
      while ($enum1.moveNext()) {
        var item = $enum1.get_current();
        clone.push(item);
      }

      return clone;
    }

  };

  Arrays.addRange_$$$_1 = function(collection, newElements) {

    if (!((newElements).length === undefined)) {
      var length = (newElements).length;

      for (var i = 0; i < length; i++) {
        collection.push((newElements)[i]);
      }

    }
    else {

      var $enum1 = ss.enumerate(collection);
      while ($enum1.moveNext()) {
        var item = $enum1.get_current();
        collection.push(item);
      }

    }

  };

  Arrays.addLongArray_$$$_1 = function(collection, newElements) {
    var length = (newElements).length;

    for (var i = 0; i < length; i++) {
      collection.push((newElements)[i]);
    }

  };

  Arrays.copy_$$$_1 = function(sourceArray, destinationArray, length) {

    for (var i = 0; i < length; i++) {
      destinationArray[i] = sourceArray[i];
    }

  };

  Arrays.copy2_$$$_1 = function(sourceArray, sourceIndex, destinationArray, destinationIndex, length) {

    for (var i = 0; i < length; i++) {
      destinationArray[i + destinationIndex] = sourceArray[i + sourceIndex];
    }

  };

  Arrays.createString = function(source) {

    if (ss.canCast(source, Array)) {
      return (source).join('');
    }
    else {
      var s = '';

      var $enum1 = ss.enumerate(source);
      while ($enum1.moveNext()) {
        var c = $enum1.get_current();
        s += c;
      }

      return s;
    }

  };

  Arrays.createArray_$$$_1 = function(Rows, initialValue) {
    var array = [];

    for (var i = 0; i < Rows; i++) {
      array.push(initialValue);
    }

    return array;
  };

  Arrays.reverse_$$$_1 = function(arr) {
    var i = 0;
    var j = (arr).length - 1;
    while (i < j) {
      var t = (arr)[i];
      (arr)[i] = (arr)[j];
      (arr)[j] = t;
      i++;
      j--;
    }
  };

  Arrays.fill3_$$$_1 = function(array, value, start, end) {

    if (array.fill) {
      array.fill( value, start, end );
    }
    else {

      for (var i = start, len = end; i < len; i++) {
        array[i] = value;
      }

    }

  };

  Arrays.fill2_$$$_1 = function(array, value, start) {

    if (array.fill) {
      array.fill( value, start );
    }
    else {

      for (var i = start, len = array.length; i < len; i++) {
        array[i] = value;
      }

    }

  };

  Arrays.fill_$$$_1 = function(array, value) {

    if (array.fill) {
      array.fill( value );
    }
    else {

      for (var i = 0, len = array.length; i < len; i++) {
        array[i] = value;
      }

    }

  };

  // SystemQut.Chars

  function Chars() {
  }

  Chars.isLetter = function(c) {
    return ('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z');
  };

  Chars.toUpperInvariant = function(referenceCharacter) {
    return (referenceCharacter).toUpperCase();
  };

  Chars.toLowerInvariant = function(referenceCharacter) {
    return (referenceCharacter).toLowerCase();
  };

  Chars.charHashCode = function(list) {
    var h = 0;
    var g;

    var $enum1 = ss.enumerate(list);
    while ($enum1.moveNext()) {
      var c = $enum1.get_current();
      h = (h << 4) + (c).charCodeAt(0);

      if (!!(g = h & 4026531840)) {
        h ^= g >> 24;
      }

      h &= ~g;
    }

    return h;
  };

  Chars.stringHashCode = function(s) {
    var h = 0;
    var g;

    for (var i = 0, l = s.length; i < l; i++) {
      h = (h << 4) + s.charCodeAt(i);

      if (!!(g = h & 4026531840)) {
        h ^= g >> 24;
      }

      h &= ~g;
    }

    return h;
  };

  Chars.isLetterCharCode = function(ch) {
    return (ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122);
  };

  Chars.toUpperInvariantCharCode = function(ch) {
    return (ch >= 97 && ch <= 122) ? (ch - 32) : ch;
  };

  Chars.toLowerInvariantCharCode = function(ch) {
    return (ch >= 65 && ch <= 90) ? (ch + 32) : ch;
  };

  // SystemQut.Comparisons

  function Comparisons() {
  }

  Comparisons.compareNumeric_$$$_1 = function(x, y) {
    return (x < y) ? -1 : (x > y) ? 1 : 0;
  };

  // SystemQut.Convert

  function Convert() {
  }

  Convert.toInt32 = function(s, ignored) {
    return parseInt(s);
  };

  // SystemQut.Int32Constants

  function Int32Constants() {
  }

  // SystemQut.Uint32Constants

  function Uint32Constants() {
  }

  // SystemQut.Pair_$$$_2

  function Pair_$$$_2(key, value) {
    var args = arguments;

    if (args.length === 2) {
      this.key = key;
      this.value = value;
    }
    else 
    if (!!args.length) {
      throw new Error('Expecting 0 or 2 arguments.');
    }

  }

  var Pair_$$$_2$ = {

  };

  // SystemQut.Rand

  function Rand(seed) {
    var _arguments = arguments;

    if (!_arguments.length) {
      this._rng = seedrandom();
    }
    else {
      this._rng = seedrandom(seed+String.fromCharCode(0));
    }

  }

  var Rand$ = {
    nextDouble: function() {
      return this._rng();
    }
    ,
    nextUint: function(max) {
      return ss.truncate(this.nextDouble() * max);
    }
    ,
    nextInt: function(max) {
      return ss.truncate(this.nextDouble() * max);
    }

  };

  // SystemQut.HtmlUtil

  function HtmlUtil() {
  }

  HtmlUtil.setAttributes = function(element, nameValuePairs) {

    if (nameValuePairs == null) {
      return element;
    }

    for (var $key1 in nameValuePairs) {
      var kvp = { key: $key1, value: nameValuePairs[$key1] };
      element.setAttribute(kvp.key, kvp.value);
    }

    return element;
  };

  HtmlUtil.createElement = function(tag, parent, nameValuePairs) {
    var element = HtmlUtil.setAttributes(document.createElement(tag), nameValuePairs);

    if (parent != null) {
      parent.appendChild(element);
    }

    return element;
  };

  HtmlUtil.createElementNS = function(nameSpace, tag, parent, nameValuePairs) {
    var element = HtmlUtil.setAttributes(document.createElementNS(nameSpace, tag), nameValuePairs);

    if (parent != null) {
      parent.appendChild(element);
    }

    return element;
  };

  HtmlUtil.bindControl = function(codeBehind, element) {
    (element).__codebehind__ = codeBehind;
    return element;
  };

  HtmlUtil.getUniqueId = function() {

    if (!ss.isValue(HtmlUtil._uniqueId)) {
      HtmlUtil._uniqueId = 0;
    }

    return '_ctl_' + (HtmlUtil._uniqueId++);
  };

  HtmlUtil.createButton = function(parent) {
    return HtmlUtil.createElement('input', parent, { type: 'button' });
  };

  HtmlUtil.saveText = function(fileName, text, contentType) {
    var blob = new Blob([ text ], { type: ss.value(contentType, 'text/plain') });
    var getBlobUrl = (window.URL && URL.createObjectURL.bind( URL)) || (window.webkitURL && webkitURL.createObjectURL.bind( webkitURL)) || window.createObjectURL;
    var revokeBlobUrl = (window.URL && URL.revokeObjectURL.bind( URL)) || (window.webkitURL && webkitURL.revokeObjectURL.bind( webkitURL)) || window.revokeObjectURL;
    var url = getBlobUrl(blob);
    var actualFileName = ss.value(fileName, 'Untitled.txt');

    if (!! window.navigator.msSaveBlob) {
      window.navigator.msSaveBlob( blob, actualFileName );;
    }
    else {
      var save = document.createElement('a');
      save.href = url;
      save.target = '_blank';
      save.download = actualFileName;
      save.style.display = 'none';
      save.innerHTML = 'Click to save!';
      var alternateUrl = ss.format('{0}:{1}:{2}', 'text/csv', actualFileName, url);
      if ( save.dataset ) { save.dataset.downloadurl = alternateUrl; };
      document.body.appendChild(save);
      save.click();
      setTimeout(function() {
        document.body.removeChild(save);
        revokeBlobUrl(url);
      }, 10000);
    }

  };

  // SystemQut.Enum

  function Enum() {
  }

  Enum.parse = function(type, text) {
    var members = type;

    var $enum1 = ss.enumerate(ss.keys(members));
    while ($enum1.moveNext()) {
      var key = $enum1.get_current();

      if (!ss.compareStrings(key, text, true)) {
        return members[key];
      }

    }

    return undefined;
  };

  Enum.toString = function(type, obj) {
    var members = type;

    for (var $key1 in members) {
      var kvp = { key: $key1, value: members[$key1] };

      if (kvp.value === obj) {
        return kvp.key;
      }

    }

    return undefined;
  };

  // SystemQut.Objects

  function Objects() {
  }

  Objects.identical = function(x, y) {

    if (!ss.isValue(x) || !ss.isValue(y)) {
      return x === y;
    }

    if (ss.canCast(x, Array)) {

      if (ss.canCast(y, Array)) {
        var xA = x;
        var yA = y;

        if (xA.length !== yA.length) {
          return false;
        }

        for (var i = 0; i < xA.length; i++) {

          if (!Objects.identical(xA[i], yA[i])) {
            return false;
          }

        }

        return true;
      }
      else {
        return false;
      }

    }
    else 
    if (ss.typeOf(x) !== ss.typeOf(y)) {
      return false;
    }
    else 
    if (ss.canCast(x, String) || ss.canCast(x, Number) || ss.canCast(x, RegExp) || ss.canCast(x, Function)) {
      return x === y;
    }
    else {

      try {
        var xD = x;
        var xKeys = ss.keys(xD);

        if (xKeys.length > 0) {
          var yD = y;
          var yKeys = ss.keys(yD);

          if (yKeys.length !== xKeys.length) {
            return false;
          }

          (xKeys).sort();
          (yKeys).sort();

          for (var i = 0; i < xKeys.length; i++) {

            if (xKeys[i] !== yKeys[i]) {
              return false;
            }

          }

          var $enum1 = ss.enumerate(xKeys);
          while ($enum1.moveNext()) {
            var key = $enum1.get_current();

            if (!Objects.identical(xD[key], yD[key])) {
              return false;
            }

          }

          return true;
        }
        else {
          return x === y;
        }

      }
      catch (ex) {
        return x === y;
      }

    }

  };

  Objects.areEqual_$$$_1 = function(x, y) {

    if (!ss.isValue(x)) {
      return x === y;
    }
    else 
    if (!(typeof(x.equals) === 'function')) {
      return x === y;
    }
    else {
      return (!ss.isValue(y)) ? false : x.equals(y);
    }

  };

  Objects.toString = function(value, substitute) {
    return (!ss.isValue(value)) ? substitute : value.toString();
  };

  Objects.fromArrays_$$$_1 = function(keys, values) {
    var obj = {};

    for (var i = 0; i < keys.length; i++) {
      obj[keys[i]] = values[i];
    }

    return obj;
  };

  Objects.serializeTable = function(objects) {
    var keys = [];

    var $enum1 = ss.enumerate(objects);
    while ($enum1.moveNext()) {
      var obj = $enum1.get_current();

      for (var $key2 in obj) {
        var kvp = { key: $key2, value: obj[$key2] };

        if (ss.typeName(ss.typeOf(kvp.value)) === 'Function' || (keys.indexOf(kvp.key) >= 0)) {
          continue;
        }

        keys.push(kvp.key);
      }

    }

    var records = [];
    records.push(keys);

    var $enum3 = ss.enumerate(objects);
    while ($enum3.moveNext()) {
      var obj = $enum3.get_current();
      var fields = [];

      var $enum4 = ss.enumerate(keys);
      while ($enum4.moveNext()) {
        var key = $enum4.get_current();
        var value = obj[key];
        fields.push(Objects.toString(value, ''));
      }

      records.push(fields);
    }

    var csv = new CsvIO();
    var writer = new StringWriter();
    csv.write(records, writer);
    return writer.toString();
  };

  Objects.deserializeTable = function(table) {
    var csv = new CsvIO();
    var reader = new StringReader(table);
    var records = csv.read(reader);
    return Objects.deserializeRecords(records);
  };

  Objects.deserializeRecords = function(records) {
    var objects = [];

    if (records.length < 2) {
      return objects;
    }

    var keys = records[0];

    for (var i = 1; i < records.length; i++) {
      var values = records[i];
      objects.push(Objects.fromArrays_$$$_1(keys, values));
    }

    return objects;
  };

  Objects.shallowCopy = function(source, dest, excludedFields) {

    for (var $key1 in source) {
      var kvp = { key: $key1, value: source[$key1] };

      if (excludedFields == null || !(excludedFields.indexOf(kvp.key) >= 0)) {
        dest[kvp.key] = source[kvp.key];
      }

    }

  };

  // SystemQut.Assert

  function Assert() {
  }

  Assert.add_process = function(value) {
    Assert.___process = ss.bindAdd(Assert.___process, value);
  };
  Assert.remove_process = function(value) {
    Assert.___process = ss.bindSub(Assert.___process, value);
  };
  Assert.numbersEqual = function(expected, actual, location) {

    if (expected !== actual) {

      try {
        throw new Error(ss.format('Assertion failed: {2}: Actual value <{0}> is not equal to expected value <{1}>', actual, expected, location));
      }
      catch (e) {

        if (Assert.___process != null) {
          Assert.___process(e);
        }

        throw e;
      }

    }

  };

  Assert.stringsEqual = function(expected, actual, location) {

    if (!!ss.compareStrings(expected, actual)) {

      try {
        throw new Error(ss.format('Assertion failed: {2}: Actual value <{0}> is not equal to expected value <{1}>', actual, expected, location));
      }
      catch (e) {

        if (Assert.___process != null) {
          Assert.___process(e);
        }

        throw e;
      }

    }

  };

  Assert.comparablesEqual = function(expected, actual, location) {

    if (!!expected.compareTo(actual)) {

      try {
        throw new Error(ss.format('Assertion failed: {2}: Actual value <{0}> is not equal to expected value <{1}>', actual, expected, location));
      }
      catch (e) {

        if (Assert.___process != null) {
          Assert.___process(e);
        }

        throw e;
      }

    }

  };

  Assert.charsEqual = function(expected, actual, location) {

    if (expected !== actual) {

      try {
        throw new Error(ss.format('Assertion failed: {2}: Actual value <{0}> is not equal to expected value <{1}>', actual, expected, location));
      }
      catch (e) {

        if (Assert.___process != null) {
          Assert.___process(e);
        }

        throw e;
      }

    }

  };

  Assert.numbersApproxEqual = function(expected, actual, epsilon, location) {

    if (Math.abs(expected - actual) > epsilon) {

      try {
        throw new Error(ss.format('Assertion failed: {0}: Difference between actual value <{0}> and expected value <{1}> exceeds <{2}>', actual, expected, epsilon));
      }
      catch (e) {

        if (Assert.___process != null) {
          Assert.___process(e);
        }

        throw e;
      }

    }

  };

  Assert.isTrue = function(condition, location) {

    if (!condition) {

      try {
        throw new Error(ss.format('Assertion failed: {0}: Condition is not true as expected.', location));
      }
      catch (e) {

        if (Assert.___process != null) {
          Assert.___process(e);
        }

        throw e;
      }

    }

  };

  Assert.isFalse = function(condition, location) {

    if (condition) {

      try {
        throw new Error(ss.format('Assertion failed: {0}: Condition is not false as expected.', location));
      }
      catch (e) {

        if (Assert.___process != null) {
          Assert.___process(e);
        }

        throw e;
      }

    }

  };

  Assert.fail = function(message) {

    try {
      throw new Error(ss.format('Assertion failed: {0}.', message));
    }
    catch (e) {

      if (Assert.___process != null) {
        Assert.___process(e);
      }

      throw e;
    }

  };

  Assert.arraysEqual_$$$_1 = function(expected, actual, location) {

    if (expected == null && actual == null) {
      return;
    }

    if (expected != null && actual == null) {
      Assert.fail(location + ': Arrays must both be non-null if either is non-null.');
    }

    if (expected == null && actual != null) {
      Assert.fail(location + ': Arrays must both be non-null if either is non-null.');
    }

    if (expected.length !== actual.length) {
      Assert.fail(location + ': Array lengths must be equal.');
    }

    for (var i = 0; i < expected.length; i++) {

      if (expected[i] !== actual[i]) {

        try {
          throw new Error(ss.format('Assertion failed: {2}: Actual value <{0}> is not equal to expected value <{1}>', actual, expected, location));
        }
        catch (e) {

          if (Assert.___process != null) {
            Assert.___process(e);
          }

          throw e;
        }

      }

    }

  };

  // SystemQut.Collections.Generic.AvlTree_$$$_2

  function AvlTree_$$$_2(comparer) {
    this.__root = null;
    this._count = 0;
    this.__comparer = comparer;
  }

  AvlTree_$$$_2._replace = function(target, source) {
    var left = source.left;
    var right = source.right;
    target.balance = source.balance;
    target.key = source.key;
    target.value = source.value;
    target.left = left;
    target.right = right;

    if (left != null) {
      left.parent = target;
    }

    if (right != null) {
      right.parent = target;
    }

  };

  var AvlTree_$$$_2$ = {
    getEnumerator: function() {
      return new AvlNodeEnumerator_$$$_2(this.__root);
    }
    ,
    clear: function() {
      this.__root = null;
    }
    ,
    search: function(key) {
      var node = this.__root;
      while (node != null) {
        var nodeKey = node.key;
        var cmp = this.__comparer(key, nodeKey);

        if (cmp < 0) {
          node = node.left;
        }
        else 
        if (cmp > 0) {
          node = node.right;
        }
        else {
          return node.value;
        }

      }
      return undefined;
    }
    ,
    insert: function(key, value) {

      if (this.__root == null) {
        this.__root = new AvlNode();
        this.__root.key = key;
        this.__root.value = value;
      }
      else {
        var node = this.__root;
        while (node != null) {
          var compare = this.__comparer(key, node.key);

          if (compare < 0) {
            var left = node.left;

            if (left == null) {
              node.left = new AvlNode();
              node.key = key;
              node.value = value;
              node.parent = node;
              this._insertBalance(node, 1);
              this._count++;
              return;
            }
            else {
              node = left;
            }

          }
          else 
          if (compare > 0) {
            var right = node.right;

            if (right == null) {
              node.right = new AvlNode();
              node.key = key;
              node.value = value;
              node.parent = node;
              this._insertBalance(node, -1);
              this._count++;
              return;
            }
            else {
              node = right;
            }

          }
          else {
            node.value = value;
            return;
          }

        }
      }

    }
    ,
    _insertBalance: function(node, balance) {
      while (node != null) {
        balance = (node.balance += balance);

        if (!balance) {
          return;
        }
        else 
        if (balance === 2) {

          if (node.left.balance === 1) {
            this._rotateRight(node);
          }
          else {
            this._rotateLeftRight(node);
          }

          return;
        }
        else 
        if (balance === -2) {

          if (node.right.balance === -1) {
            this._rotateLeft(node);
          }
          else {
            this._rotateRightLeft(node);
          }

          return;
        }

        var parent = node.parent;

        if (parent != null) {
          balance = (parent.left === node) ? 1 : -1;
        }

        node = parent;
      }
    }
    ,
    remove: function(key) {
      var node = this.__root;
      while (node != null) {
        var comparison = this.__comparer(key, node.key);

        if (comparison < 0) {
          node = node.left;
        }
        else 
        if (comparison > 0) {
          node = node.right;
        }
        else {
          var left = node.left;
          var right = node.right;

          if (left == null) {

            if (right == null) {

              if (node === this.__root) {
                this.__root = null;
              }
              else {
                var parent = node.parent;

                if (parent.left === node) {
                  parent.left = null;
                  this._deleteBalance(parent, -1);
                }
                else {
                  parent.right = null;
                  this._deleteBalance(parent, 1);
                }

              }

            }
            else {
              AvlTree_$$$_2._replace(node, right);
              this._deleteBalance(node, 0);
            }

          }
          else 
          if (right == null) {
            AvlTree_$$$_2._replace(node, left);
            this._deleteBalance(node, 0);
          }
          else {
            var successor = right;

            if (successor.left == null) {
              var parent = node.parent;
              successor.parent = parent;
              successor.left = left;
              successor.balance = node.balance;

              if (left != null) {
                left.parent = successor;
              }

              if (node === this.__root) {
                this.__root = successor;
              }
              else {

                if (parent.left === node) {
                  parent.left = successor;
                }
                else {
                  parent.right = successor;
                }

              }

              this._deleteBalance(successor, 1);
            }
            else {
              while (successor.left != null) {
                successor = successor.left;
              }
              var parent = node.parent;
              var successorParent = successor.parent;
              var successorRight = successor.right;

              if (successorParent.left === successor) {
                successorParent.left = successorRight;
              }
              else {
                successorParent.right = successorRight;
              }

              if (successorRight != null) {
                successorRight.parent = successorParent;
              }

              successor.parent = parent;
              successor.left = left;
              successor.balance = node.balance;
              successor.right = right;
              right.parent = successor;

              if (left != null) {
                left.parent = successor;
              }

              if (node === this.__root) {
                this.__root = successor;
              }
              else {

                if (parent.left === node) {
                  parent.left = successor;
                }
                else {
                  parent.right = successor;
                }

              }

              this._deleteBalance(successorParent, -1);
            }

          }

          this._count--;
          return true;
        }

      }
      return false;
    }
    ,
    _deleteBalance: function(node, balance) {
      while (node != null) {
        balance = (node.balance += balance);

        if (balance === 2) {

          if (node.left.balance >= 0) {
            node = this._rotateRight(node);

            if (node.balance === -1) {
              return;
            }

          }
          else {
            node = this._rotateLeftRight(node);
          }

        }
        else 
        if (balance === -2) {

          if (node.right.balance <= 0) {
            node = this._rotateLeft(node);

            if (node.balance === 1) {
              return;
            }

          }
          else {
            node = this._rotateRightLeft(node);
          }

        }
        else 
        if (!!balance) {
          return;
        }

        var parent = node.parent;

        if (parent != null) {
          balance = (parent.left === node) ? -1 : 1;
        }

        node = parent;
      }
    }
    ,
    _rotateLeft: function(node) {
      var right = node.right;
      var rightLeft = right.left;
      var parent = node.parent;
      right.parent = parent;
      right.left = node;
      node.right = rightLeft;
      node.parent = right;

      if (rightLeft != null) {
        rightLeft.parent = node;
      }

      if (node === this.__root) {
        this.__root = right;
      }
      else 
      if (parent.right === node) {
        parent.right = right;
      }
      else {
        parent.left = right;
      }

      right.balance++;
      node.balance = -right.balance;
      return right;
    }
    ,
    _rotateRight: function(node) {
      var left = node.left;
      var leftRight = left.right;
      var parent = node.parent;
      left.parent = parent;
      left.right = node;
      node.left = leftRight;
      node.parent = left;

      if (leftRight != null) {
        leftRight.parent = node;
      }

      if (node === this.__root) {
        this.__root = left;
      }
      else 
      if (parent.left === node) {
        parent.left = left;
      }
      else {
        parent.right = left;
      }

      left.balance--;
      node.balance = -left.balance;
      return left;
    }
    ,
    _rotateLeftRight: function(node) {
      var left = node.left;
      var leftRight = left.right;
      var parent = node.parent;
      var leftRightRight = leftRight.right;
      var leftRightLeft = leftRight.left;
      leftRight.parent = parent;
      node.left = leftRightRight;
      left.right = leftRightLeft;
      leftRight.left = left;
      leftRight.right = node;
      left.parent = leftRight;
      node.parent = leftRight;

      if (leftRightRight != null) {
        leftRightRight.parent = node;
      }

      if (leftRightLeft != null) {
        leftRightLeft.parent = left;
      }

      if (node === this.__root) {
        this.__root = leftRight;
      }
      else 
      if (parent.left === node) {
        parent.left = leftRight;
      }
      else {
        parent.right = leftRight;
      }

      if (leftRight.balance === -1) {
        node.balance = 0;
        left.balance = 1;
      }
      else 
      if (!leftRight.balance) {
        node.balance = 0;
        left.balance = 0;
      }
      else {
        node.balance = -1;
        left.balance = 0;
      }

      leftRight.balance = 0;
      return leftRight;
    }
    ,
    _rotateRightLeft: function(node) {
      var right = node.right;
      var rightLeft = right.left;
      var parent = node.parent;
      var rightLeftLeft = rightLeft.left;
      var rightLeftRight = rightLeft.right;
      rightLeft.parent = parent;
      node.right = rightLeftLeft;
      right.left = rightLeftRight;
      rightLeft.right = right;
      rightLeft.left = node;
      right.parent = rightLeft;
      node.parent = rightLeft;

      if (rightLeftLeft != null) {
        rightLeftLeft.parent = node;
      }

      if (rightLeftRight != null) {
        rightLeftRight.parent = right;
      }

      if (node === this.__root) {
        this.__root = rightLeft;
      }
      else 
      if (parent.right === node) {
        parent.right = rightLeft;
      }
      else {
        parent.left = rightLeft;
      }

      if (rightLeft.balance === 1) {
        node.balance = 0;
        right.balance = -1;
      }
      else 
      if (!rightLeft.balance) {
        node.balance = 0;
        right.balance = 0;
      }
      else {
        node.balance = 1;
        right.balance = 0;
      }

      rightLeft.balance = 0;
      return rightLeft;
    }
    ,
    _maxKey: function() {
      var node = this.__root;
      var result = undefined;
      while (node != null) {
        result = node.key;
        node = node.right;
      }
      return result;
    }
    ,
    _minKey: function() {
      var node = this.__root;
      var result = undefined;
      while (node != null) {
        result = node.key;
        node = node.left;
      }
      return result;
    }
    ,
    containsKey: function(key) {
      return ss.isValue(this.search(key));
    }
    ,
    get_count: function() {
      return this._count;
    }
    ,
    get_item: function(key) {
      return this.search(key);
    },
    set_item: function(key, value) {
      this.insert(key, value);
      return value;
    }
  };

  // SystemQut.Collections.Generic.AvlNode

  function AvlNode() {
    this.balance = 0;
  }

  var AvlNode$ = {

  };

  // SystemQut.Collections.Generic.AvlNodeEnumerator_$$$_2

  function AvlNodeEnumerator_$$$_2(root) {
    this.__action = 0;
    this.__right = this.__root = root;
    this.__action = (root == null) ? 2 : 1;
  }

  var AvlNodeEnumerator_$$$_2$ = {
    moveNext: function() {

      switch (this.__action) {
        case 1:
          this.__current = this.__right;
          while (this.__current.left != null) {
            this.__current = this.__current.left;
          }
          this.__right = this.__current.right;
          this.__action = (this.__right != null) ? 1 : 0;
          return true;
        case 0:
          while (this.__current.parent != null) {
            var previous = this.__current;
            this.__current = this.__current.parent;

            if (this.__current.left === previous) {
              this.__right = this.__current.right;
              this.__action = (this.__right != null) ? 1 : 0;
              return true;
            }

          }
          this.__action = 2;
          return false;
        default:
          return false;
      }

    }
    ,
    reset: function() {
      this.__right = this.__root;
      this.__action = (this.__root == null) ? 2 : 1;
    }
    ,
    get_current: function() {
      var kvp = {};
      kvp.key = this.__current.key;
      kvp.value = this.__current.value;
      return kvp;
    }
    ,
    dispose: function() {
    }

  };

  // SystemQut.Collections.Generic.HashSet_$$$_1

  function HashSet_$$$_1(mappingValues) {
    this._dictionary = {};

    if (arguments.length < 1) {
      return;
    }

    var $enum1 = ss.enumerate(mappingValues);
    while ($enum1.moveNext()) {
      var item = $enum1.get_current();
      this._dictionary[item] = true;
    }

  }

  var HashSet_$$$_1$ = {
    toString: function() {
      var keys = ss.keys(this._dictionary);
      keys.sort();
      return Enumerable.joinStrings_$$$_1(keys, ',');
    }
    ,
    contains: function(item) {
      return !(this._dictionary[item] === undefined);
    }
    ,
    add: function(p) {
      this._dictionary[p] = true;
    }
    ,
    get_count: function() {
      return ss.keyCount(this._dictionary);
    }
    ,
    getEnumerator: function() {
      return ss.enumerate(ss.keys(this._dictionary));
    }

  };

  // SystemQut.Collections.Generic.KeyEnumerator_$$$_2

  function KeyEnumerator_$$$_2(enumerator) {
    this._enumerator = enumerator;
  }

  var KeyEnumerator_$$$_2$ = {
    get_current: function() {
      var current = this._enumerator.get_current();
      return current.key;
    }
    ,
    moveNext: function() {
      return this._enumerator.moveNext();
    }
    ,
    reset: function() {
      this._enumerator.reset();
    }

  };

  // SystemQut.Collections.Generic.SortedSet_$$$_1

  function SortedSet_$$$_1(comparer, collection) {
    this._count = 0;
    this._tree = new AvlTree_$$$_2(comparer);
    this._comparer = comparer;

    if (arguments.length < 2) {
      return;
    }

    var $enum1 = ss.enumerate(collection);
    while ($enum1.moveNext()) {
      var t = $enum1.get_current();

      if ((this._tree.search(t) === undefined)) {
        this._tree.insert(t, t);
        this._count++;
      }

    }

  }

  var SortedSet_$$$_1$ = {
    get_comparer: function() {
      return this._comparer;
    }
    ,
    get_length: function() {

      // What is this???

      return this._count;
    }
    ,
    get_max: function() {
      return this._tree._maxKey();
    }
    ,
    get_min: function() {
      return this._tree._minKey();
    }
    ,
    add: function(item) {

      if ((this._tree.search(item) === undefined)) {
        this._tree.insert(item, item);
        this._count++;
        return true;
      }
      else {
        return false;
      }

    }
    ,
    clear: function() {
      this._tree.clear();
    }
    ,
    contains: function(item) {
      return !(this._tree.search(item) === undefined);
    }
    ,
    copyTo: function(array, index, count) {

      if (arguments.length < 2) {
        index = 0;
      }

      if (arguments.length < 3) {
        count = Number.MAX_VALUE;
      }

      var i = 0;

      var $dict1 = this._tree;
      for (var $key2 in $dict1) {
        var item = { key: $key2, value: $dict1[$key2] };

        if (i >= count) {
          break;
        }

        array[index + i] = item.key;
        i++;
      }

    }
    ,
    exceptWith: function(other) {

      var $enum1 = ss.enumerate(other);
      while ($enum1.moveNext()) {
        var item = $enum1.get_current();
        this.remove(item);
      }

    }
    ,
    getEnumerator: function() {
      return new KeyEnumerator_$$$_2(ss.enumerate(this._tree));
    }
    ,
    getViewBetween: function(lowerValue, upperValue) {
      var result = new SortedSet_$$$_1(this._comparer);

      var $dict1 = this._tree;
      for (var $key2 in $dict1) {
        var item = { key: $key2, value: $dict1[$key2] };

        if (this._comparer(item.key, lowerValue) >= 0 && this._comparer(item.key, upperValue) <= 0) {
          result.add(item.key);
        }

      }

      return result;
    }
    ,
    intersectWith: function(other) {
      var otherSet = new SortedSet_$$$_1(this._comparer, other);
      var itemsToRemove = [];

      var $dict1 = this._tree;
      for (var $key2 in $dict1) {
        var item = { key: $key2, value: $dict1[$key2] };

        if (!otherSet.contains(item.key)) {
          itemsToRemove.push(item.key);
        }

      }

      for (var i = 0; i < itemsToRemove.length; i++) {
        this.remove(itemsToRemove[i]);
      }

    }
    ,
    isProperSubsetOf: function(other) {
      var otherSet = new SortedSet_$$$_1(this._comparer, other);
      return this._isSubsetOfOtherSet(otherSet) && otherSet.get_length() > this._count;
    }
    ,
    isProperSupersetOf: function(other) {
      var otherSet = new SortedSet_$$$_1(this._comparer, other);
      return this.isSupersetOf(otherSet) && this._count > otherSet.get_length();
    }
    ,
    isSubsetOf: function(other) {
      var otherSet = new SortedSet_$$$_1(this._comparer, other);
      return this._isSubsetOfOtherSet(otherSet);
    }
    ,
    _isSubsetOfOtherSet: function(otherSet) {

      var $dict1 = this._tree;
      for (var $key2 in $dict1) {
        var item = { key: $key2, value: $dict1[$key2] };

        if (!otherSet.contains(item.key)) {
          return false;
        }

      }

      return true;
    }
    ,
    isSupersetOf: function(other) {

      var $enum1 = ss.enumerate(other);
      while ($enum1.moveNext()) {
        var item = $enum1.get_current();

        if ((this._tree.search(item) === undefined)) {
          return false;
        }

      }

      return true;
    }
    ,
    overlaps: function(other) {

      var $enum1 = ss.enumerate(other);
      while ($enum1.moveNext()) {
        var item = $enum1.get_current();

        if (!(this._tree.search(item) === undefined)) {
          return true;
        }

      }

      return false;
    }
    ,
    remove: function(item) {
      var success = this._tree.remove(item);

      if (success) {
        this._count--;
      }

      return success;
    }
    ,
    removeWhere: function(match) {
      var itemsToRemove = [];

      var $dict1 = this._tree;
      for (var $key2 in $dict1) {
        var item = { key: $key2, value: $dict1[$key2] };

        if (match(item.key)) {
          itemsToRemove.push(item.key);
        }

      }

      for (var i = 0; i < itemsToRemove.length; i++) {
        this.remove(itemsToRemove[i]);
      }

      return itemsToRemove.length;
    }
    ,
    reverse: function() {
      throw new Error('Reverse: operation not supported');
    }
    ,
    setEquals: function(other) {
      var otherSet = new SortedSet_$$$_1(this._comparer, other);

      if (this._count !== otherSet.get_length()) {
        return false;
      }

      var thisEnum = ss.enumerate(this);
      var otherEnum = ss.enumerate(other);
      while (thisEnum.moveNext() && otherEnum.moveNext()) {

        if (!!this._comparer(thisEnum.get_current(), otherEnum.get_current())) {
          return false;
        }

      }
      return true;
    }
    ,
    symmetricExceptWith: function(other) {
      var itemsToRemove = [];
      var otherSet = new SortedSet_$$$_1(this._comparer, other);

      var $dict1 = this._tree;
      for (var $key2 in $dict1) {
        var item = { key: $key2, value: $dict1[$key2] };

        if (otherSet.contains(item.key)) {
          itemsToRemove.push(item.key);
        }

      }

      var $enum3 = ss.enumerate(otherSet);
      while ($enum3.moveNext()) {
        var item = $enum3.get_current();

        if (!this.contains(item)) {
          this.add(item);
        }

      }

      var $enum4 = ss.enumerate(itemsToRemove);
      while ($enum4.moveNext()) {
        var item = $enum4.get_current();
        this.remove(item);
      }

    }
    ,
    unionWith: function(other) {

      var $enum1 = ss.enumerate(other);
      while ($enum1.moveNext()) {
        var item = $enum1.get_current();
        this.add(item);
      }

    }
    ,
    get_item: function(idx) {

      if (idx < 0) {
        throw new Error('Index out of bounds');
      }

      var i = 0;
      var enumerator = ss.enumerate(this);
      while (enumerator.moveNext()) {

        if (i === idx) {
          return enumerator.get_current();
        }

        i++;
      }
      throw new Error('Index out of bounds');
    },
    set_item: function(idx, value) {
      throw new NotImplementedException();
      return value;
    }
  };

  // SystemQUT.Csv.CsvIO

  function CsvIO(separator, quoteChar) {
    this._separator = 0;
    this._quoteChar = 0;
    this._currentChar = 0;
    this._nextChar = CsvIO._EOF;
    this._rows = [];
    this._parsingString = false;
    this._currentField = new ss.StringBuilder();
    this._position = 0;
    this._lineNumber = 0;
    var args = arguments;

    if (args.length < 1) {
      separator = ',';
    }

    if (args.length < 2) {
      quoteChar = '"';
    }

    var separator_ = (separator).charCodeAt(0);
    var quoteChar_ = (quoteChar).charCodeAt(0);

    if (separator === 13 || separator === 10 || separator === quoteChar) {
      throw new Error('separator may not be CR, LF or the escape (quote) character.');
    }

    if (quoteChar === 13 || quoteChar === 10) {
      throw new Error('quote character may not be CR or LF.');
    }

    this._separator = separator_;
    this._quoteChar = quoteChar_;
  }

  var CsvIO$ = {
    get__isEOL: function() {
      return this._currentChar === 13 || this._currentChar === 10 || this._currentChar === CsvIO._CRLF;
    }
    ,
    get__isEOF: function() {
      return this._currentChar === CsvIO._EOF;
    }
    ,
    get__isBOF: function() {
      return !this._currentChar;
    }
    ,
    get__isCOMMA: function() {
      return this._currentChar === this._separator;
    }
    ,
    get__isEOS: function() {
      return this._currentChar === CsvIO._EOS;
    }
    ,
    _toRaggedArray: function() {
      return this._rows;
    }
    ,
    read: function(reader) {
      this._currentChar = 0;
      this._nextChar = CsvIO._EOF;
      this._reader = reader;
      this._rows.length = 0;
      this._lowLevelRead();
      this._readFile();
      return this._toRaggedArray();
    }
    ,
    _lowLevelRead: function() {
      this._nextChar = this._reader.readCharCode();

      if (this._nextChar !== CsvIO._EOF) {
        this._position++;
      }

    }
    ,
    _readChar: function() {
      this._currentChar = this._nextChar;

      if (this._nextChar === 13) {
        this._lowLevelRead();

        if (this._nextChar === 10) {
          this._lowLevelRead();
          this._currentChar = CsvIO._CRLF;
        }

        this._lineNumber++;
        this._position = 0;
      }
      else 
      if (this._nextChar === 10) {
        this._lowLevelRead();
        this._lineNumber++;
        this._position = 0;
      }
      else 
      if (this._parsingString && this._nextChar === this._quoteChar) {
        this._nextChar = this._reader.readCharCode();

        if (this._nextChar === this._quoteChar) {
          this._nextChar = this._reader.readCharCode();
        }
        else {
          this._currentChar = CsvIO._EOS;
        }

      }
      else {
        this._nextChar = this._reader.readCharCode();
      }

    }
    ,
    _readFile: function() {
      do {
        this._readRecord();
      } while (this.get__isEOL());

      if (!(this._currentChar === CsvIO._EOF)) {
        throw new Error('Expected EOF but found something else.');
      }

      if (this._currentRow != null && this._currentRow.length === 1 && !this._currentRow[0].length) {
        this._rows.splice(this._rows.length - 1, 1);
      }

    }
    ,
    _readRecord: function() {
      while (!this.get__isEOF() && !(this.get__isBOF() || this.get__isEOL())) {
        this._readChar();
      }

      if (this.get__isEOF()) {
        return;
      }

      this._rows.push(this._currentRow = []);
      do {
        this._readField();
      } while (this._currentChar === this._separator);
    }
    ,
    _readField: function() {
      while ((!this.get__isEOF()) && !(this.get__isBOF() || this.get__isEOL() || this.get__isCOMMA())) {
        this._readChar();
      }

      if (this.get__isEOF()) {
        return;
      }

      this._currentField.clear();

      if (this._nextChar === this._quoteChar) {
        this._readEscaped();
      }
      else {
        this._readNonEscaped();
      }

      this._currentRow.push(this._currentField.toString());
    }
    ,
    _readNonEscaped: function() {

      for (; ; ) {
        this._readChar();

        if (this.get__isEOF() || this.get__isEOL() || this.get__isCOMMA()) {
          break;
        }

        this._currentField.append(String.fromCharCode(this._currentChar));
      }

    }
    ,
    _readEscaped: function() {

      try {
        this._readChar();

        if (!(this._currentChar === this._quoteChar)) {
          throw new Error('Expecting quote character at beginning of quoted field.');
        }

        this._parsingString = true;

        for (; ; ) {
          this._readChar();

          if (this.get__isEOF() || this.get__isEOS()) {
            break;
          }

          this._currentField.append((this.get__isEOL()) ? '\n' : String.fromCharCode(this._currentChar));
        }

        while (!(this.get__isEOF() || this.get__isCOMMA() || this.get__isEOL())) {
          this._readChar();
        }
      }
      finally {
        this._parsingString = false;
      }

    }
    ,
    write: function(records, writer) {

      var $enum1 = ss.enumerate(records);
      while ($enum1.moveNext()) {
        var record = $enum1.get_current();
        this.writeRecord(record, writer);
      }

    }
    ,
    writeRecord: function(record, writer) {
      var sepC = String.fromCharCode(this._separator)[0];
      var quoteC = String.fromCharCode(this._quoteChar)[0];
      var crC = String.fromCharCode(13)[0];
      var lfC = String.fromCharCode(10)[0];
      var escapeWorthyCharacters = [ sepC, quoteC, crC, lfC ];
      var fieldCount = record.length;
      var i = 0;

      var $enum1 = ss.enumerate(record);
      while ($enum1.moveNext()) {
        var field = $enum1.get_current();
        var field_ = (field == null) ? '' : field;
        var escaped = this._indexOfAny(field_, escapeWorthyCharacters) >= 0;

        if (escaped) {
          writer.writeChar(quoteC);
        }

        for (var j = 0; j < field_.length; j++) {
          var c = field_[j];

          if (c === quoteC) {
            writer.writeChar(c);
          }

          writer.writeChar(c);
        }

        if (escaped) {
          writer.writeChar(quoteC);
        }

        if (++i < fieldCount) {
          writer.writeChar(sepC);
        }

      }

      writer.writeLn();
    }
    ,
    _indexOfAny: function(text, chars) {
      var result = -1;

      for (var i = 0; i < chars.length; i++) {
        var idx = text.indexOf(chars[i]);

        if (idx >= 0 && (result < 0 || idx < result)) {
          result = idx;
        }

      }

      return result;
    }

  };

  // SystemQut.Linq.EmptyCollection_$$$_1

  function EmptyCollection_$$$_1() {
  }

  var EmptyCollection_$$$_1$ = {
    getEnumerator: function() {
      return this;
    }
    ,
    get_current: function() {
      return null;
    }
    ,
    moveNext: function() {
      return false;
    }
    ,
    reset: function() {
    }

  };

  // SystemQut.Linq.Enumerable

  function Enumerable() {
  }

  Enumerable.firstOrDefault_$$$_1 = function(list, predicate) {

    if (arguments.length === 1) {
      predicate = null;
    }

    var $enum1 = ss.enumerate(list);
    while ($enum1.moveNext()) {
      var item = $enum1.get_current();

      if (predicate == null || predicate(item)) {
        return item;
      }

    }

    return null;
  };

  Enumerable.all_$$$_1 = function(list, predicate) {

    var $enum1 = ss.enumerate(list);
    while ($enum1.moveNext()) {
      var item = $enum1.get_current();

      if (predicate != null && !predicate(item)) {
        return false;
      }

    }

    return true;
  };

  Enumerable.any_$$$_1 = function(list, predicate) {

    var $enum1 = ss.enumerate(list);
    while ($enum1.moveNext()) {
      var item = $enum1.get_current();

      if (predicate == null || predicate(item)) {
        return true;
      }

    }

    return false;
  };

  Enumerable.joinStrings_$$$_1 = function(collection, separator) {
    var b = new ss.StringBuilder();
    var deja = false;

    var $enum1 = ss.enumerate(collection);
    while ($enum1.moveNext()) {
      var t = $enum1.get_current();

      if (deja) {
        b.append(separator);
      }
      else {
        deja = true;
      }

      b.append(t);
    }

    return b.toString();
  };

  Enumerable.first_$$$_1 = function(collection) {

    if (collection.length !== undefined) {
      var length = (collection).length;

      if (!length) {
        throw new InvalidOperationException();
      }

      return (collection)[0];
    }
    else {
      var enumerator = ss.enumerate(collection);

      if (enumerator.moveNext()) {
        return enumerator.get_current();
      }
      else {
        throw new InvalidOperationException();
      }

    }

  };

  Enumerable.last_$$$_1 = function(collection) {

    if (collection.length !== undefined) {
      var length = (collection).length;

      if (!length) {
        throw new InvalidOperationException();
      }

      return (collection)[length - 1];
    }
    else {
      var enumerator = ss.enumerate(collection);
      var last = undefined;
      while (enumerator.moveNext()) {
        last = enumerator.get_current();
      }

      if ((last === undefined)) {
        throw new InvalidOperationException();
      }

      return last;
    }

  };

  Enumerable.select_$$$_2 = function(collection, projection) {
    return new Projection_$$$_2(collection, projection);
  };

  Enumerable.toList_$$$_1 = function(collection) {

    if (ss.canAssign((Array), ss.typeOf(collection))) {
      return collection;
    }

    var result = [];

    var $enum1 = ss.enumerate(collection);
    while ($enum1.moveNext()) {
      var item = $enum1.get_current();
      result.push(item);
    }

    return result;
  };

  Enumerable.count_$$$_1 = function(collection) {

    if (collection.length !== undefined) {
      return collection.length;
    }
    else 
    if (collection.get_count !== undefined) {
      return collection.get_count();
    }
    else {
      var counter = 0;

      var $enum1 = ss.enumerate(collection);
      while ($enum1.moveNext()) {
        var item = $enum1.get_current();
        counter++;
      }

      return counter;
    }

  };

  Enumerable.where_$$$_1 = function(collection, predicate) {
    return new FilteredCollection_$$$_1(collection, predicate);
  };

  Enumerable.max_$$$_1 = function(collection) {

    if (collection == null) {
      throw new ArgumentNullException('collection');
    }

    var result = -Number.MAX_VALUE;

    var $enum1 = ss.enumerate(collection);
    while ($enum1.moveNext()) {
      var item = $enum1.get_current();

      if (!(ss.canCast(item, Number))) {
        throw new Error();
      }

      if ((item) > result) {
        result = (item);
      }

    }

    return result;
  };

  Enumerable.min_$$$_1 = function(collection) {

    if (collection == null) {
      throw new ArgumentNullException('collection');
    }

    var result = Number.MAX_VALUE;

    var $enum1 = ss.enumerate(collection);
    while ($enum1.moveNext()) {
      var item = $enum1.get_current();

      if (!(ss.canCast(item, Number))) {
        throw new Error();
      }

      if ((item) < result) {
        result = (item);
      }

    }

    return result;
  };

  Enumerable.empty_$$$_1 = function() {
    return new EmptyCollection_$$$_1();
  };

  Enumerable.pairwise_$$$_2 = function(collection1, collection2, process) {
    var enum1 = ss.enumerate(collection1);
    var enum2 = ss.enumerate(collection2);
    while (enum1.moveNext() && enum2.moveNext()) {
      var x = enum1.get_current();
      var y = enum2.get_current();
      process(x, y);
    }
  };

  // SystemQut.Linq.Projection_$$$_2

  function Projection_$$$_2(collection, projection) {
    this._collection = collection;
    this._projection = projection;
  }

  var Projection_$$$_2$ = {
    getEnumerator: function() {
      return new ProjectionIterator_$$$_2(ss.enumerate(this._collection), this._projection);
    }

  };

  // SystemQut.Linq.ProjectionIterator_$$$_2

  function ProjectionIterator_$$$_2(enumerator, projection) {
    this._enumerator = enumerator;
    this._projection = projection;
  }

  var ProjectionIterator_$$$_2$ = {
    get_current: function() {
      return this._projection(this._enumerator.get_current());
    }
    ,
    moveNext: function() {
      return this._enumerator.moveNext();
    }
    ,
    reset: function() {
      this._enumerator.reset();
    }

  };

  // SystemQut.Linq.FilteredCollection_$$$_1

  function FilteredCollection_$$$_1(collection, predicate) {
    this._collection = collection;
    this._predicate = predicate;
  }

  var FilteredCollection_$$$_1$ = {
    getEnumerator: function() {
      return new FilteredCollectionEnumerator_$$$_1(ss.enumerate(this._collection), this._predicate);
    }

  };

  // SystemQut.Linq.FilteredCollectionEnumerator_$$$_1

  function FilteredCollectionEnumerator_$$$_1(enumerator, predicate) {
    this._enumerator = enumerator;
    this._predicate = predicate;
  }

  var FilteredCollectionEnumerator_$$$_1$ = {
    get_current: function() {
      return this._enumerator.get_current();
    }
    ,
    moveNext: function() {
      while (this._enumerator.moveNext()) {

        if (this._predicate(this._enumerator.get_current())) {
          return true;
        }

      }
      return false;
    }
    ,
    reset: function() {
      this._enumerator.reset();
    }

  };

  // SystemQut.IO.TextReader

  function TextReader() {
  }

  var TextReader$ = {
    readCharCode: function() {
      return (this.get_endOfStream()) ? -1 : (this.readChar()).charCodeAt(0);
    }

  };

  // SystemQut.IO.TextWriter

  function TextWriter() {
    this._newLine = '\n';
  }

  var TextWriter$ = {
    get_newLine: function() {
      return this._newLine;
    }
    ,
    set_newLine: function(value) {
      this._newLine = value;
      return value;
    }
    ,
    close: function() {
    }
    ,
    flush: function() {
    }
    ,
    writeChar: function(buffer) {
      this.writeString(buffer);
    }
    ,
    writeChars: function(buffer) {
      this.writeString(buffer.join());
    }
    ,
    writeObject: function(value) {
      this.writeString(value.toString());
    }
    ,
    write: function(format, args) {
      this.writeString(ss.format(format, args));
    }
    ,
    writeLn: function() {
      this.writeString(this._newLine);
    }
    ,
    writeLineChars: function(buffer) {
      this.writeString(buffer.join());
    }
    ,
    writeLineObject: function(value) {
      this.writeString(value.toString());
    }
    ,
    writeLineString: function(value) {
      this.writeString(value);
      this.writeLn();
    }
    ,
    writeLine: function(format, args) {
      this.writeString(ss.format(format, args));
      this.writeLn();
    }

  };

  // SystemQut.UnitTest.TestFramework

  function TestFramework() {
  }

  TestFramework.runAllTests = function(types) {

    var $enum1 = ss.enumerate(types);
    while ($enum1.moveNext()) {
      var t = $enum1.get_current();
      var prototype = t.prototype;
      var tests = [];

      var $enum2 = ss.enumerate(ss.keys(prototype));
      while ($enum2.moveNext()) {
        var key = $enum2.get_current();
        var value = prototype[key];

        if (ss.canCast(value, Function) && ss.startsWith(key, 'test')) {
          tests.push({ item1: t, item2: ss.typeName(t) + '.' + key, item3: value });
        }

      }

      TestFramework._runTests2(tests);
    }

  };

  TestFramework._runTests2 = function(tests) {
    var passed = 0;
    var outOf = 0;

    var $enum1 = ss.enumerate(tests);
    while ($enum1.moveNext()) {
      var test = $enum1.get_current();
      outOf++;
      var type = test.item1;
      var method = test.item3;

      try {
        var testInstance = new type();
        method.call(testInstance);
        console.log(test.item2 + ' passed!');
        passed++;
      }
      catch (ex) {
        console.log(test.item2 + ' failed!');
        console.log(ex.stack + '\n');
      }

    }

    console.log(ss.format('Passed {0}/{1}, failed {2}/{1}', passed, outOf, outOf - passed));
    console.log('');
  };

  // SystemQut.Xml.XmlDocument

  function XmlDocument() {
    this._dom = new Element('', '', null, null);
    this._dom.set__isDocumentRoot(true);
  }

  XmlDocument.parse = function(reader) {
    var doc = new XmlDocument();
    var currentElement = doc._dom;
    var stack = [];
    while (reader.read()) {

      switch (reader.get_nodeType()) {
        case 1:
          var newElement = new Element('', reader.get_name(), reader.get_attributes(), null);
          currentElement.append(newElement);

          if (!reader.get_isEmptyElement()) {
            stack.push(currentElement);
            currentElement = newElement;
          }

          break;
        case 3:
          currentElement.appendText('', reader.get_value());
          break;
        case 17:
          currentElement.append(new XmlDeclarationNode('', reader.get_name(), reader.get_attributes()));
          break;
        case 7:
          currentElement.append(new XmlProcessingInstructionNode('', reader.get_name(), reader.get_attributes()));
          break;
        case 4:
          currentElement.append(new XmlCDataNode('', reader.get_value()));
          break;
        case 8:
          currentElement.append(new XmlCommentNode('', reader.get_value()));
          break;
        case 15:
          currentElement = stack.pop();
          break;
      }

    }
    return doc;
  };

  var XmlDocument$ = {
    get_DOM: function() {
      return this._dom;
    }

  };

  // SystemQut.Xml.XmlElementEnumerator

  function XmlElementEnumerator(element) {
    this._currentIndex = 0;
    this._indexStack = [];
    this._collectionStack = [];
    this._element = element;
    this.reset();
  }

  var XmlElementEnumerator$ = {
    get_current: function() {
      return this._current;
    }
    ,
    moveNext: function() {

      if (this._currentIndex === -1) {

        if (this._currentCollection.get__isDocumentRoot()) {
          this._currentIndex = 0;
          return this.moveNext();
        }
        else {
          this._current = this._currentCollection;
          this._currentIndex = 0;
          return true;
        }

      }
      else 
      if (this._currentIndex < this._currentCollection.get_children().length) {
        var currentChild = this._currentCollection.get_children()[this._currentIndex];

        if (ss.canCast(currentChild, Element)) {
          this._collectionStack.push(this._currentCollection);
          this._indexStack.push(this._currentIndex);
          this._currentCollection = currentChild;
          this._currentIndex = -1;
          return this.moveNext();
        }
        else {
          this._currentIndex++;
          this._current = currentChild;
          return true;
        }

      }
      else {
        while (this._currentCollection != null && this._currentIndex >= this._currentCollection.get_children().length) {
          this._currentCollection = this._collectionStack.pop();
          this._currentIndex = this._indexStack.pop() + 1;
        }

        if (this._currentCollection != null) {
          return this.moveNext();
        }
        else {
          return false;
        }

      }

    }
    ,
    reset: function() {
      this._indexStack.length = 0;
      this._indexStack.push(0);
      this._collectionStack.length = 0;
      this._collectionStack.push(null);
      this._currentIndex = -1;
      this._currentCollection = this._element;
    }

  };

  // SystemQut.Xml.Node

  function Node(id) {
    this.set_id(id);
  }

  Node.encode = function(p) {
    return ss.replaceString(ss.replaceString(ss.replaceString(ss.replaceString(p, '&', '&amp;'), '"', '&quot;'), '<', '&lt;'), '>', '&gt;');
  };

  Node.decode = function(p) {
    return ss.replaceString(ss.replaceString(ss.replaceString(ss.replaceString(p, '&gt;', '>'), '&lt;', '<'), '&quot;', '"'), '&amp;', '&');
  };

  var Node$ = {
    get_id: function() {
      return this.id;
    }
    ,
    set_id: function(value) {
      this.id = ss.value(value, '');
      return value;
    }

  };

  // SystemQut.Xml.XmlLexer

  function XmlLexer(input) {
    this._input = null;
    this._token = 0;
    this._currentChar = '\u0000';
    this._tokenValue = [];
    this._processingTag = false;
    this._processingCDATA = false;
    this._processingComment = false;
    this._processingEndTag = false;
    this._input = input;
    this._currentChar = input.readChar();
    this._advance();
  }

  var XmlLexer$ = {
    get_token: function() {
      return this._token;
    }
    ,
    get_tokenValue: function() {
      return (this._input.get_endOfStream()) ? '' : this._tokenValue.join('');
    }
    ,
    _advance: function() {
      this._tokenValue.length = 0;
      var token;

      if (this._currentChar === '\u0000') {
        token = 1;
      }
      else 
      if (this._processingTag) {
        token = this._processTag();
      }
      else 
      if (this._processingCDATA) {
        token = this._processCdata();
        this._processingCDATA = token !== 18;
      }
      else 
      if (this._processingComment) {
        token = this._processComment();
        this._processingComment = token !== 20;
      }
      else 
      if (this._processingEndTag) {
        token = this._processEndTag();
      }
      else 
      if (this._currentChar === '<') {
        this._appendAndGet();

        if (this._currentChar === '!') {
          this._appendAndGet();

          if (this._currentChar === '[') {
            this._appendAndGet();

            if (this._currentChar === 'C') {
              this._appendAndGet();
            }
            else {
              throw new Error('Bad CDATA declaration');
            }

            if (this._currentChar === 'D') {
              this._appendAndGet();
            }
            else {
              throw new Error('Bad CDATA declaration');
            }

            if (this._currentChar === 'A') {
              this._appendAndGet();
            }
            else {
              throw new Error('Bad CDATA declaration');
            }

            if (this._currentChar === 'T') {
              this._appendAndGet();
            }
            else {
              throw new Error('Bad CDATA declaration');
            }

            if (this._currentChar === 'A') {
              this._appendAndGet();
            }
            else {
              throw new Error('Bad CDATA declaration');
            }

            if (this._currentChar === '[') {
              this._appendAndGet();
            }
            else {
              throw new Error('Bad CDATA declaration');
            }

            token = 17;
            this._processingCDATA = true;
          }
          else 
          if (this._currentChar === '-') {
            this._appendAndGet();

            if (this._currentChar === '-') {
              this._appendAndGet();
            }
            else {
              throw new Error('Bad comment start');
            }

            token = 19;
            this._processingComment = true;
          }
          else {
            token = 6;
            this._processingTag = true;
          }

        }
        else 
        if (this._currentChar === '?') {
          this._processingTag = true;
          this._appendAndGet();
          token = 7;
        }
        else 
        if (this._currentChar === '/') {
          this._processingEndTag = true;
          this._appendAndGet();
          token = 14;
        }
        else {
          this._processingTag = true;
          token = 3;
        }

      }
      else {
        this._tokenValue.push(this._currentChar);
        this._tokenValue.push(this._input.readToFirst('<'));
        this._currentChar = this._input.readChar();
        token = 16;
      }

      this._token = token;
      return token;
    }
    ,
    _processEndTag: function() {

      if (this._currentChar === '>') {
        this._processingEndTag = false;
        this._appendAndGet();
        return 4;
      }
      else {
        this._appendAndGet();
        while (this._currentChar !== '\u0000' && this._currentChar !== '>') {
          this._appendAndGet();
        }
        return 5;
      }

    }
    ,
    _processComment: function() {

      if (this._currentChar === '-') {
        this._appendAndGet();

        if (this._currentChar === '-') {
          this._appendAndGet();

          if (this._currentChar === '>') {
            this._appendAndGet();
            return 20;
          }
          else {
            return 16;
          }

        }
        else {
          return 16;
        }

      }
      else {
        while (this._currentChar !== '-' && this._currentChar !== '\u0000') {
          this._appendAndGet();
        }
        return 16;
      }

    }
    ,
    _processCdata: function() {

      if (this._currentChar === ']') {
        this._appendAndGet();

        if (this._currentChar === ']') {
          this._appendAndGet();

          if (this._currentChar === '>') {
            this._appendAndGet();
            return 18;
          }
          else {
            return 16;
          }

        }
        else {
          return 16;
        }

      }
      else {
        while (this._currentChar !== ']' && this._currentChar !== '\u0000') {
          this._appendAndGet();
        }
        return 16;
      }

    }
    ,
    _processTag: function() {
      var token;

      if (this._currentChar === '?') {
        this._appendAndGet();

        if (this._currentChar === '>') {
          this._appendAndGet();
          token = 8;
          this._processingTag = false;
        }
        else {
          token = 16;
        }

      }
      else 
      if (this._currentChar === '/') {
        this._appendAndGet();

        if (this._currentChar === '>') {
          this._appendAndGet();
          token = 13;
          this._processingTag = false;
        }
        else {
          token = 16;
        }

      }
      else 
      if (this._currentChar === '>') {
        this._appendAndGet();
        token = 4;
        this._processingTag = false;
      }
      else 
      if (this._currentChar === '=') {
        this._appendAndGet();
        token = 15;
      }
      else 
      if (this._currentChar === '"' || this._currentChar === "'") {
        var terminator = this._currentChar;
        this._tokenValue.push(terminator);
        this._tokenValue.push(this._input.readToFirstChar(terminator));
        this._tokenValue.push(terminator);
        this._currentChar = this._input.readChar();
        this._currentChar = this._input.readChar();
        token = 12;
      }
      else 
      if (' \n\r\u000c\t'.indexOf(this._currentChar) >= 0) {
        this._appendAndGet();
        while (this._currentChar !== '\u0000' && ' \n\r\u000c\t'.indexOf(this._currentChar) >= 0) {
          this._appendAndGet();
        }
        token = 2;
      }
      else {
        this._appendAndGet();
        while (this._currentChar !== '\u0000' && "?!\"'>= \n\u000c\t\r".indexOf(this._currentChar) < 0) {
          this._appendAndGet();
        }
        token = 5;
      }

      return token;
    }
    ,
    _appendAndGet: function() {
      this._tokenValue.push(this._currentChar);
      this._currentChar = this._input.readChar();
    }

  };

  // SystemQut.Xml.XmlReader

  function XmlReader(input) {
    this._nodeType = 0;
    this._value = '';
    this._attributes = {};
    this._content = new ss.StringBuilder();
    this._isEmptyElement = false;

    if (!ss.isValue(input)) {
      throw new Error('input is null.');
    }

    this._lexer = new XmlLexer(input);
  }

  XmlReader.create = function(input) {
    return new XmlReader(input);
  };

  var XmlReader$ = {
    read: function() {
      var token = this._lexer.get_token();

      if (token === 1) {
        return false;
      }

      this._resetCurrentElement();

      if (token === 3) {
        this._readOpenTag();
      }
      else 
      if (token === 14) {
        this._readClosingTag();
      }
      else 
      if (token === 7) {
        this._readXmlDeclTag();
      }
      else 
      if (token === 6) {
        this._readProcessingInstruction();
      }
      else 
      if (token === 17) {
        this._readCdata();
      }
      else 
      if (token === 19) {
        this._readComment();
      }
      else {
        this._readText();
      }

      return true;
    }
    ,
    _readComment: function() {
      this._name = 'COMMENT';
      this._nodeType = 8;
      var token = this._lexer._advance();
      while (token === 16) {
        this._content.append(this._lexer.get_tokenValue());
        token = this._lexer._advance();
      }

      if (token !== 20) {
        throw new Error('Unclosed comment:\n' + this._value);
      }

      this._value = this._content.toString();
      this._lexer._advance();
    }
    ,
    _readCdata: function() {
      this._name = 'CDATA';
      this._nodeType = 4;
      var token = this._lexer._advance();
      while (token === 16) {
        this._content.append(this._lexer.get_tokenValue());
        token = this._lexer._advance();
      }

      if (token !== 18) {
        throw new Error('Unclosed CDATA:\n' + this._value);
      }

      this._value = this._content.toString();
      this._lexer._advance();
    }
    ,
    _readOpenTag: function() {
      var token = this._lexer._advance();
      this._name = null;
      this._value = '';
      while (token !== 1 && token !== 13 && token !== 4) {

        if (token === 5) {

          if (this._name == null) {
            this._name = this._lexer.get_tokenValue();
          }
          else {
            this._readAttribute();
          }

        }

        token = this._lexer._advance();
      }
      token = this._lexer._advance();
      this._nodeType = 1;
      this._isEmptyElement = token === 13;
    }
    ,
    _readClosingTag: function() {
      var token = this._lexer._advance();
      while (token !== 1 && token !== 4) {

        if (token === 5) {

          if (this._name == null) {
            this._name = this._lexer.get_tokenValue();
          }

        }

        token = this._lexer._advance();
      }
      token = this._lexer._advance();
      this._nodeType = 15;
    }
    ,
    _readXmlDeclTag: function() {
      var token = this._lexer._advance();
      while (token !== 1 && token !== 8) {

        if (token === 5) {

          if (this._name == null) {
            this._name = this._lexer.get_tokenValue();
          }
          else {
            this._readAttribute();
          }

        }

        token = this._lexer._advance();
      }
      token = this._lexer._advance();
      this._nodeType = 17;
    }
    ,
    _readAttribute: function() {
      var attributeName = this._lexer.get_tokenValue();
      var token = this._lexer._advance();

      if (token === 15) {
        token = this._lexer._advance();

        if (token === 12) {
          var value = this._lexer.get_tokenValue();
          this._attributes[attributeName] = value.substring(1, value.length - 1);
        }

      }

    }
    ,
    _readProcessingInstruction: function() {
      var token = this._lexer._advance();
      while (token !== 1 && token !== 4) {

        if (this._lexer.get_token() === 5 && this._name == null) {
          this._name = this._lexer.get_tokenValue();
        }
        else {
          this._content.append(this._lexer.get_tokenValue());
        }

        token = this._lexer._advance();
      }
      token = this._lexer._advance();
      this._nodeType = (this._name === 'DOCTYPE') ? 10 : (this._name === 'ENTITY') ? 6 : 7;
      this._value = this._content.toString();
    }
    ,
    _resetCurrentElement: function() {
      this._name = null;
      ss.clearKeys(this._attributes);
      this._content.clear();
      this._isEmptyElement = true;
    }
    ,
    _readText: function() {
      this._name = 'TEXT';
      this._nodeType = 3;
      this._value = this._lexer.get_tokenValue();
      var token = this._lexer._advance();
    }
    ,
    get_nodeType: function() {
      return this._nodeType;
    }
    ,
    get_value: function() {
      return this._value;
    }
    ,
    get_attributes: function() {
      return this._attributes;
    }
    ,
    get_name: function() {
      return this._name;
    }
    ,
    get_isEmptyElement: function() {
      return this._isEmptyElement;
    }
    ,
    get_isStartToken: function() {
      var token = this._lexer.get_token();
      return token === 3 || token === 6 || token === 7 || token === 14;
    }

  };

  // SystemQut.ComponentModel.Binding

  function Binding(source, sourcePropertyName, target, targetPropertyName, mode) {
    this._mode = 0;
    this._source = source;
    this._target = target;
    this._mode = mode;
    this._sourcePropertyName = sourcePropertyName;
    var ssSourceProp = ss.format('{0}{1}', sourcePropertyName.substr(0, 1).toLowerCase(), sourcePropertyName.substr(1));
    this._sourceGetExpression = ss.format('this._source.get_{0} ? this._source.get_{0}() : this._source.{0}', ssSourceProp);
    this._sourceSetExpression = ss.format('if ( this._source.set_{0} ) { this._source.set_{0}( value ); } else { this._source.{0} = value; }', ssSourceProp);
    this._targetPropertyName = targetPropertyName;
    var ssTargetProp = ss.format('{0}{1}', targetPropertyName.substr(0, 1).toLowerCase(), targetPropertyName.substr(1));
    this._targetGetExpression = ss.format('this._target.get_{0} ? this._target.get_{0}() : this._target.{0}', ssTargetProp);
    this._targetSetExpression = ss.format('if ( this._target.set_{0} ) { this._target.set_{0}( value ); } else { this._target.{0} = value; }', ssTargetProp);

    if (ss.canCast(source, INotifyPropertyChanged)) {
      (source).add_propertyChanged(ss.bind('_sourcePropertyChanged', this));
    }

    if (ss.canCast(target, INotifyPropertyChanged) && mode === 2) {
      (target).add_propertyChanged(ss.bind('_targetPropertyChanged', this));
    }

    this.updateTarget();
  }

  Binding.create = function(source, sourcePropertyName, target, targetPropertyName, mode) {
    return new Binding(source, sourcePropertyName, target, targetPropertyName, mode);
  };

  var Binding$ = {
    get_source: function() {
      return this._source;
    }
    ,
    set_source: function(value) {

      if (ss.canCast(this._source, INotifyPropertyChanged)) {
        (this._source).remove_propertyChanged(ss.bind('_sourcePropertyChanged', this));
      }

      this._source = value;

      if (ss.canCast(this._source, INotifyPropertyChanged)) {
        (this._source).add_propertyChanged(ss.bind('_sourcePropertyChanged', this));
      }

      this.updateTarget();
      return value;
    }
    ,
    get_target: function() {
      return this._target;
    }
    ,
    set_target: function(value) {

      if (ss.canCast(this._target, INotifyPropertyChanged) && this._mode === 2) {
        (this._target).remove_propertyChanged(ss.bind('_targetPropertyChanged', this));
      }

      this._target = value;

      if (ss.canCast(this._target, INotifyPropertyChanged) && this._mode === 2) {
        (this._target).add_propertyChanged(ss.bind('_targetPropertyChanged', this));
      }

      this.updateTarget();
      return value;
    }
    ,
    get_targetPropertyName: function() {
      return this._targetPropertyName;
    }
    ,
    get_sourcePropertyName: function() {
      return this._sourcePropertyName;
    }
    ,
    _sourcePropertyChanged: function(sender, args) {

      if ((args.get_propertyNames().indexOf(this._sourcePropertyName) >= 0)) {
        this.updateTarget();
      }

    }
    ,
    _targetPropertyChanged: function(sender, args) {

      if ((args.get_propertyNames().indexOf(this._targetPropertyName) >= 0)) {
        this.updateSource();
      }

    }
    ,
    updateTarget: function() {

      if (!ss.isValue(this._source)) {
        return;
      }

      if (!ss.isValue(this._target)) {
        return;
      }

      var value = eval(this._sourceGetExpression);
      eval(this._targetSetExpression);
    }
    ,
    getSourceValue: function(source) {
      return eval(ss.replaceString(this._sourceGetExpression, 'this._source', 'source'));
    }
    ,
    updateSource: function() {

      if (!ss.isValue(this._source)) {
        return;
      }

      if (!ss.isValue(this._target)) {
        return;
      }

      if (this._mode !== 2) {
        return;
      }

      var value = eval(this._targetGetExpression);
      eval(this._sourceSetExpression);
    }
    ,
    dispose: function() {

      if (ss.canCast(this._source, INotifyPropertyChanged)) {
        (this._source).remove_propertyChanged(ss.bind('_sourcePropertyChanged', this));
      }

      if (this._mode === 2) {
        (this._target).remove_propertyChanged(ss.bind('_targetPropertyChanged', this));
      }

    }

  };

  // SystemQut.ComponentModel.CollectionChangedEventArgs

  function CollectionChangedEventArgs(itemsAdded, itemsRemoved) {
    this._itemsAdded = (ss.isValue(itemsAdded)) ? itemsAdded : new Array(0);
    this._itemsRemoved = (ss.isValue(itemsRemoved)) ? itemsRemoved : new Array(0);
  }

  var CollectionChangedEventArgs$ = {
    get_itemsAdded: function() {
      return this._itemsAdded;
    }
    ,
    get_itemsRemoved: function() {
      return this._itemsRemoved;
    }

  };

  // SystemQut.ComponentModel.FilteredList_$$$_2

  function FilteredList_$$$_2(collection, filter, selector) {
    this._predicate = FilteredList_$$$_2._alwaysTrue;
    this._selector = FilteredList_$$$_2._identity;
    this._enumerator = ss.enumerate(collection);
    this._predicate = filter;

    if (selector != null) {
      this._selector = selector;
    }

  }

  FilteredList_$$$_2._alwaysTrue = function(item) {
    return true;
  };

  FilteredList_$$$_2._identity = function(item) {
    return item;
  };

  var FilteredList_$$$_2$ = {
    getEnumerator: function() {
      return this;
    }
    ,
    get_current: function() {
      return this._selector(this._enumerator.get_current());
    }
    ,
    moveNext: function() {
      while (this._enumerator.moveNext()) {

        if (this._predicate == null || this._predicate(this._enumerator.get_current())) {
          this.current = this._selector == null ? this._enumerator.current : this._selector( this._enumerator.current );
          return true;
        }

      }
      return false;
    }
    ,
    reset: function() {
      this._enumerator.reset();
      this.current = this._enumerator.current;
      while (this._predicate != null && (!this._predicate(this._enumerator.get_current())) && this._enumerator.moveNext()) {
      }
    }

  };

  // SystemQut.ComponentModel.ObservableList

  function ObservableList(initialContent) {
    this._items = [];

    if (ss.isValue(initialContent) && initialContent.length > 0) {
      this.addRange(initialContent);
    }

  }

  var ObservableList$ = {
    add_collectionChanged: function(value) {
      this.___collectionChanged = ss.bindAdd(this.___collectionChanged, value);
    },
    remove_collectionChanged: function(value) {
      this.___collectionChanged = ss.bindSub(this.___collectionChanged, value);
    },
    get_length: function() {
      return this._items.length;
    }
    ,
    add: function(item) {
      this._items.push(item);
      this._notifyCollectionChanged([ item ], new Array(0));
    }
    ,
    addRange: function(items) {

      var $enum1 = ss.enumerate(items);
      while ($enum1.moveNext()) {
        var item = $enum1.get_current();
        this._items.push(item);
      }

      this._notifyCollectionChanged(items.slice(0), new Array(0));
    }
    ,
    remove: function(item) {
      ss.remove(this._items, item);
      this._notifyCollectionChanged(new Array(0), [ item ]);
    }
    ,
    removeAll: function(items) {

      var $enum1 = ss.enumerate(items);
      while ($enum1.moveNext()) {
        var item = $enum1.get_current();
        this.remove(item);
      }

      this._notifyCollectionChanged(new Array(0), items.slice(0));
    }
    ,
    _notifyCollectionChanged: function(itemsAdded, itemsRemoved) {

      if (this.___collectionChanged != null) {
        this.___collectionChanged(this, new CollectionChangedEventArgs(itemsAdded, itemsRemoved));
      }

    }
    ,
    getEnumerator: function() {
      return ss.enumerate(this._items);
    }
    ,
    asArray_$$$_1: function() {
      return this._items;
    }
    ,
    get_item: function(index) {
      return this._items[index];
    }
  };

  // SystemQut.ComponentModel.ProjectedList

  function ProjectedList(list, selector) {
    this._enumerator = ss.enumerate(list);
    this._selector = selector;
  }

  var ProjectedList$ = {
    getEnumerator: function() {
      return this;
    }
    ,
    get_current: function() {
      return this._enumerator.get_current();
    }
    ,
    moveNext: function() {
      var canMove = this._enumerator.moveNext();
      var currentItem = null;

      if (canMove) {
        currentItem = this._selector(this._enumerator.current);
      }

      this.current = currentItem;
      return canMove;
    }
    ,
    reset: function() {
      this._enumerator.reset();
    }

  };

  // SystemQut.Controls.RecordButtonUtil

  function RecordButtonUtil() {
  }

  RecordButtonUtil._bar = function(yMax, barThickness) {
    return [ new Point(0, 0), new Point(0, yMax), new Point(barThickness, yMax), new Point(barThickness, 0), new Point(0, 0) ];
  };

  RecordButtonUtil._arrow = function(xMax, yMax, arrowStartX, arrowHeadThickness, arrowThickness) {
    return [ new Point(arrowStartX, yMax / 2), new Point(arrowStartX + yMax / 2, yMax), new Point(arrowStartX + yMax / 2 + arrowHeadThickness, yMax), new Point(arrowStartX + arrowHeadThickness + arrowThickness / 2, (yMax + arrowThickness) / 2), new Point(xMax, (yMax + arrowThickness) / 2), new Point(xMax, (yMax - arrowThickness) / 2), new Point(arrowStartX + arrowHeadThickness + arrowThickness / 2, (yMax - arrowThickness) / 2), new Point(arrowStartX + yMax / 2 + arrowHeadThickness, 0), new Point(arrowStartX + yMax / 2, 0), new Point(arrowStartX, yMax / 2) ];
  };

  // SystemQut.Controls.CodeBehind

  function CodeBehind(domElement) {

    if (!ss.isValue(domElement)) {
      domElement = document.createElement('div');
    }

    this._domElement = domElement;
    HtmlUtil.bindControl(this, domElement);
    this._detectDataBindings();
  }

  CodeBehind.setChildDataContexts = function(element, oldValue, newValue) {

    for (var i = 0; i < element.childNodes.length; i++) {
      var child = element.childNodes[i];

      if (child.__codebehind__) {
        var codeBehind = child.__codebehind__;

        if (codeBehind._dataContext === oldValue) {
          codeBehind.set_dataContext(newValue);
        }

      }

      CodeBehind.setChildDataContexts(child, oldValue, newValue);
    }

  };

  CodeBehind.get_csS_SELECTED_CLASS = function() {
    return 'Selected';
  };

  CodeBehind.get_targeT_PROPERTY_ALREADY_BOUND = function() {
    return 'Target property already bound';
  };

  CodeBehind.bindControls = function(element) {
    var ATTRIBUTE_NAME = 'data-codebehind';

    for (var i = 0; i < element.childNodes.length; i++) {
      CodeBehind.bindControls(element.childNodes[i]);
    }

    if ((typeof(element.getAttribute) === 'function')) {
      var className = element.getAttribute(ATTRIBUTE_NAME);

      if (ss.isValue(className)) {

        if (ss.keyExists(CodeBehind._types, className)) {
          var type = CodeBehind._types[className];
          new type(element);
        }
        else {
          eval('new ' + className + '(element);');
        }

      }

    }

  };

  CodeBehind.bindAllControls = function(elements) {

    for (var i = 0; i < elements.length; i++) {
      CodeBehind.bindControls(elements[i]);
    }

  };

  CodeBehind.registerCodeBehindType = function(type) {

    if (ss.keyExists(CodeBehind._types, ss.typeName(type))) {
      throw new Error(ss.format('Type {0} is already registered', ss.typeName(type)));
    }

    CodeBehind._types[ss.typeName(type)] = type;
  };

  CodeBehind.forallControlsOfType_$$$_1 = function(type, element, action) {
    var codebehind = Control.getCodeBehind(element);

    if (ss.isValue(codebehind) && ss.canAssign(type, ss.typeOf(codebehind))) {
      action(codebehind);
    }

    for (var i = 0; i < element.childNodes.length; i++) {
      CodeBehind.forallControlsOfType_$$$_1(type, element.childNodes[i], action);
    }

  };

  var CodeBehind$ = {
    get_domElement: function() {
      return this._domElement;
    }
    ,
    get_name: function() {
      return this.getAttribute_$$$_1('data-name');
    }
    ,
    set_name: function(value) {
      this.setAttribute_$$$_1('data-name', value);
      return value;
    }
    ,
    get_dataContext: function() {
      return this._dataContext;
    }
    ,
    set_dataContext: function(value) {
      CodeBehind.setChildDataContexts(this._domElement, this._dataContext, value);
      this._dataContext = value;

      if (this._bindings) {

        for (var i = 0; i < this._bindings.length; i++) {
          this._bindings[i].set_source(value);
        }

      }

      return value;
    }
    ,
    bind: function(sourcePropertyName, targetPropertyName, mode) {

      if (this._bindings == null) {
        this._bindings = [];
      }

      for (var i = 0; i < this._bindings.length; i++) {

        if (this._bindings[i].get_targetPropertyName() === targetPropertyName) {
          throw new Error(CodeBehind.get_targeT_PROPERTY_ALREADY_BOUND());
        }

      }

      var binding = new Binding(this._dataContext, sourcePropertyName, this, targetPropertyName, mode);
      this._bindings.push(binding);
      return binding;
    }
    ,
    _detectDataBindings: function() {
      var attr = this._domElement.getAttribute('data-binding');

      if (!ss.isValue(attr)) {
        return;
      }

      var triples = attr.split(';');

      var $enum1 = ss.enumerate(triples);
      while ($enum1.moveNext()) {
        var triple = $enum1.get_current();
        var binding = triple.split(',');

        if (binding.length < 1 || binding.length > 3) {
          throw new Error(this.get_invaliD_BINDING_TRIPLE());
        }

        var mode = 1;
        var targetProperty = null;
        var sourceProperty = binding[0];

        if (binding.length >= 2) {
          targetProperty = binding[1];
        }

        if (binding.length === 3 && binding[2] === 'TwoWay') {
          mode = 2;
        }

        this.setUpBinding(sourceProperty, targetProperty, mode);
      }

    }
    ,
    setUpBinding: function(sourceProperty, targetProperty, mode) {
      this.bind(sourceProperty, targetProperty, mode);
    }
    ,
    dispose: function() {

      if (ss.isValue(this._bindings)) {

        for (var i = 0; i < this._bindings.length; i++) {
          this._bindings[i].dispose();
        }

      }

      (this._domElement).__codebehind__ = null;

      if (this._domElement.parentNode != null) {
        this._domElement.parentNode.removeChild(this._domElement);
      }

      this._domElement = null;
    }
    ,
    addElementTo: function(container) {
      container.appendChild(this._domElement);
    }
    ,
    removeElement: function() {

      if (this._domElement.parentNode != null) {
        this._domElement.parentNode.removeChild(this._domElement);
      }

    }
    ,
    findControl: function(controlName) {
      return this._findControlRecursive(controlName, this._domElement);
    }
    ,
    _findControlRecursive: function(controlName, domElement) {
      var ATTRIBUTE_NAME = 'data-name';

      if (domElement.attributes != null && domElement.getAttribute(ATTRIBUTE_NAME) === controlName) {
        return (domElement).__codebehind__;
      }

      for (var i = 0; i < domElement.childNodes.length; i++) {
        var childResult = this._findControlRecursive(controlName, domElement.childNodes[i]);

        if (childResult != null) {
          return childResult;
        }

      }

      return null;
    }
    ,
    findControlByType: function(type) {
      return this._findControlByTypeRecursive(type, this._domElement);
    }
    ,
    _findControlByTypeRecursive: function(type, domElement) {

      if (Control.hasCodeBehind(domElement)) {
        var codeBehind = Control.getCodeBehind(domElement);

        if (ss.canAssign(type, ss.typeOf(codeBehind))) {
          return codeBehind;
        }

      }

      for (var i = 0; i < domElement.childNodes.length; i++) {
        var childResult = this._findControlByTypeRecursive(type, domElement.childNodes[i]);

        if (childResult != null) {
          return childResult;
        }

      }

      return null;
    }
    ,
    get_invaliD_BINDING_TRIPLE: function() {
      return 'Binding definition must consist of three comma-separated identifiers';
    }
    ,
    getAttribute_$$$_1: function(name) {
      return this._domElement.getAttribute(name);
    }
    ,
    setAttribute_$$$_1: function(name, value) {

      if (value == null) {
        this._domElement.removeAttribute(name);
      }
      else {
        this._domElement.setAttribute(name, value);
      }

    }
    ,
    add_propertyChanged: function(value) {
      this.___propertyChanged = ss.bindAdd(this.___propertyChanged, value);
    },
    remove_propertyChanged: function(value) {
      this.___propertyChanged = ss.bindSub(this.___propertyChanged, value);
    },
    notifyPropertyChanged: function(propertyNames) {

      if (this.___propertyChanged != null) {
        this.___propertyChanged(this, new PropertyChangedEventArgs(propertyNames));
      }

    }
    ,
    get_isEnabled: function() {
      return !this._domElement.disabled;
    }
    ,
    set_isEnabled: function(value) {

      if (value !== this._domElement.disabled) {
        return;
      }

      this._domElement.disabled = !value;
      this.notifyPropertyChanged('IsEnabled');
      this.notifyPropertyChanged('IsDisabled');
      return value;
    }
    ,
    get_isDisabled: function() {
      return this._domElement.disabled;
    }
    ,
    set_isDisabled: function(value) {

      if (value === this._domElement.disabled) {
        return;
      }

      this._domElement.disabled = value;
      this.notifyPropertyChanged('IsEnabled');
      this.notifyPropertyChanged('IsDisabled');
      return value;
    }

  };

  // SystemQut.Controls.Point

  function Point(x, y) {
    this._x = 0;
    this._y = 0;
    this.set_x(x);
    this.set_y(y);
  }

  var Point$ = {
    get_x: function() {
      return this._x;
    }
    ,
    set_x: function(value) {

      if (!ss.isValue(this._x)) {
        throw new Error('Point.x must be defined.');
      }

      this._x = value;
      return value;
    }
    ,
    get_y: function() {
      return this._y;
    }
    ,
    set_y: function(value) {

      if (!ss.isValue(this._y)) {
        throw new Error('Point.y must be defined.');
      }

      this._y = value;
      return value;
    }
    ,
    toString: function() {
      return ss.format('{0}, {1}', this._x, this._y);
    }

  };

  // SystemQut.Css.AttrQualifier

  function AttrQualifier(attr, op, value) {
    Assert.isFalse(ss.whitespace(attr), 'AttrQualifier.ctor: attr may not be null or blank');
    this._attr = attr;

    if (arguments.length === 1) {
      this._op = null;
      this._value = null;
      return;
    }

    var validOps = [ '=', '~=', '|=', '^=', '$=', '*=' ];
    Assert.isTrue((validOps.indexOf(op) >= 0), 'AttrQualifier.ctor: invalid operator.');
    Assert.isFalse(ss.whitespace(value), 'AttrQualifier.ctor: attr may not be null or blank');
    this._op = op;
    this._value = value;
  }

  var AttrQualifier$ = {
    toString: function() {
      return ss.format('[{0}{1}]', this._attr, ((this._op == null) ? '' : this._op + this._value));
    }

  };

  // SystemQut.Css.CombinedSelector

  function CombinedSelector(combinator, selector) {
    var validOps = [ ' ', '>', '+', '~' ];
    Assert.isTrue((validOps.indexOf(combinator) >= 0), 'CombinedSimpleSelector.ctor: invalid combinator.');
    Assert.isTrue(ss.isValue(selector), 'CombinedSimpleSelector.ctor: selector must have a value.');
    this._combinator = combinator;
    this._selector = selector;
  }

  var CombinedSelector$ = {
    toString: function() {
      return this._combinator + this._selector.toString();
    }

  };

  // SystemQut.Css.Selector

  function Selector() {
  }

  var Selector$ = {

  };

  // SystemQut.Svg.PreserveAspectRatioType

  function PreserveAspectRatioType(s) {
    this._value = s;
  }

  PreserveAspectRatioType.concat = function(v1, v2, v3) {
    var value = v1._value;

    if (v2 != null) {
      value += v2._value;
    }

    if (v3 != null) {
      value += v3._value;
    }

    return new PreserveAspectRatioType(value);
  };

  PreserveAspectRatioType.get_defer = function() {
    return new PreserveAspectRatioType('defer ');
  };

  PreserveAspectRatioType.get_none = function() {
    return new PreserveAspectRatioType('none ');
  };

  PreserveAspectRatioType.get_xMinYMin = function() {
    return new PreserveAspectRatioType('xMinYMin ');
  };

  PreserveAspectRatioType.get_xMidYMin = function() {
    return new PreserveAspectRatioType('xMidYMin ');
  };

  PreserveAspectRatioType.get_xMaxYMin = function() {
    return new PreserveAspectRatioType('xMaxYMin ');
  };

  PreserveAspectRatioType.get_xMinYMid = function() {
    return new PreserveAspectRatioType('xMinYMid ');
  };

  PreserveAspectRatioType.get_xMidYMid = function() {
    return new PreserveAspectRatioType('xMidYMid ');
  };

  PreserveAspectRatioType.get_xMaxYMid = function() {
    return new PreserveAspectRatioType('xMaxYMid ');
  };

  PreserveAspectRatioType.get_xMinYMax = function() {
    return new PreserveAspectRatioType('xMinYMax ');
  };

  PreserveAspectRatioType.get_xMidYMax = function() {
    return new PreserveAspectRatioType('xMidYMax ');
  };

  PreserveAspectRatioType.get_xMaxYMax = function() {
    return new PreserveAspectRatioType('xMaxYMax ');
  };

  PreserveAspectRatioType.get_meet = function() {
    return new PreserveAspectRatioType('meet ');
  };

  PreserveAspectRatioType.get_slice = function() {
    return new PreserveAspectRatioType('slice ');
  };

  PreserveAspectRatioType._parse = function(p) {
    var all = [ PreserveAspectRatioType.get_defer(), PreserveAspectRatioType.get_meet(), PreserveAspectRatioType.get_none(), PreserveAspectRatioType.get_slice(), PreserveAspectRatioType.get_xMaxYMax(), PreserveAspectRatioType.get_xMaxYMid(), PreserveAspectRatioType.get_xMaxYMin(), PreserveAspectRatioType.get_xMidYMax(), PreserveAspectRatioType.get_xMidYMid(), PreserveAspectRatioType.get_xMidYMin(), PreserveAspectRatioType.get_xMinYMax(), PreserveAspectRatioType.get_xMinYMid(), PreserveAspectRatioType.get_xMinYMin() ];
    var found = [ null, null, null ];
    var nFound = 0;
    var pieces = p.split(new RegExp('\\s+'));

    if (pieces.length > 3) {
      throw new Error('invalid value');
    }

    for (var i = 0; i < pieces.length; i++) {

      for (var j = 0; j < all.length; j++) {
        var item = all[j];

        if (pieces[i] === item._value) {
          found[nFound++] = item;
        }

      }

    }

    if (nFound !== pieces.length) {
      throw new Error('invalid value');
    }

    if (nFound === 1) {
      return found[0];
    }

    return PreserveAspectRatioType.concat(found[0], found[1], found[2]);
  };

  var PreserveAspectRatioType$ = {
    toString: function() {
      return this._value;
    }

  };

  // SystemQut.Svg.SvgAnimatedLength

  function SvgAnimatedLength() {
  }

  var SvgAnimatedLength$ = {
    get_baseVal: function() {
      return null;
    }
    ,
    set_baseVal: function(value) {
      return value;
    }
    ,
    get_animVal: function() {
      return null;
    }
    ,
    set_animVal: function(value) {
      return value;
    }

  };

  // SystemQut.Svg.SvgLength

  function SvgLength(value, unitType) {
    this._value = 0;
    this._lengthType = 0;
    this._value = value;
    this._lengthType = unitType;
  }

  var SvgLength$ = {
    get_unitType: function() {
      throw new Error('Not implemented');
    }
    ,
    get_value: function() {
      throw new Error('Not implemented');
    }
    ,
    get_valueInSpecifiedUnits: function() {
      throw new Error('Not implemented');
    }
    ,
    get_valueAsString: function() {
      throw new Error('Not implemented');
    }
    ,
    newValueSpecifiedInUnits: function(unitType, valueInspecifiedUnits) {
      throw new Error('Not implemented');
    }
    ,
    convertToSpecifiedUnits: function() {
      throw new Error('Not implemented');
    }
    ,
    isEqualTo: function(other) {
      return this._value === other.valueInSpecifiedUnits && this._lengthType === other.unitType;
    }
    ,
    toString: function() {
      var suffices = [ '', '', '%', 'em', 'ex', 'px', 'cm', 'mm', 'in', 'pt', 'pc' ];
      return ss.format('{0}{1}', this._value, suffices[this._lengthType]);
    }

  };

  // SystemQut.Svg.Transform

  function Transform() {
  }

  Transform.matrix = function(a, b, c, d, e, f) {
    return ss.format('matrix({0},{1},{2},{3},{4},{5})', a, b, c, d, e, f);
  };

  Transform.translateXY = function(dx, dy) {
    return ss.format('translate({0},{1})', dx, dy);
  };

  Transform.translate = function(dxy) {
    return ss.format('translate({0})', dxy);
  };

  Transform.scaleXY = function(sx, sy) {
    return ss.format('scale({0},{1})', sx, sy);
  };

  Transform.scale = function(sxy) {
    return ss.format('scale({0})', sxy);
  };

  Transform.rotate = function(degrees) {
    return ss.format('rotate({0})', degrees);
  };

  Transform.rotateXY = function(degrees, cx, cy) {
    return ss.format('rotate({0},{1},{2})', degrees, cx, cy);
  };

  Transform.skewX = function(skewDegrees) {
    return ss.format('skewX({0})', skewDegrees);
  };

  Transform.skewY = function(skewDegrees) {
    return ss.format('skewY({0})', skewDegrees);
  };

  var Transform$ = {

  };

  // SystemQut.Svg.Svg

  function Svg() {
  }

  Svg.createElement = function(tag, parent, attributes) {
    var element = HtmlUtil.setAttributes(document.createElementNS('http://www.w3.org/2000/svg', tag), attributes);

    if (parent != null) {
      parent.appendChild(element);
    }

    return element;
  };

  Svg.createOuterSvgElement = function(parent, attributes) {
    var element = new SvgSvg(null, attributes);

    if (parent != null) {
      parent.appendChild(element._domElement);
    }

    return element;
  };

  Svg.convertLength = function(desiredAbsoluteLength, viewboxAbsoluteSize, viewBoxRelativeSize) {
    return viewBoxRelativeSize / viewboxAbsoluteSize * desiredAbsoluteLength;
  };

  // SystemQut.Svg.SvgRect

  function SvgRect(x, y, width, height) {
    this._x = 0;
    this._y = 0;
    this._width = 0;
    this._height = 0;
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
  }

  var SvgRect$ = {
    toString: function() {
      return ss.format('{0} {1} {2} {3}', this._x, this._y, this._width, this._height);
    }
    ,
    isEqualTo: function(other) {
      return this._x === other.x && this._y === other.y && this._width === other.width && this._height === other.height;
    }
    ,
    get_x: function() {
      return this._x;
    }
    ,
    get_y: function() {
      return this._y;
    }
    ,
    get_width: function() {
      return this._width;
    }
    ,
    get_height: function() {
      return this._height;
    }

  };

  // SystemQut.ServiceModel.ServiceResponse_$$$_1

  function ServiceResponse_$$$_1(records, error) {
    this.content = records;
    this.error = error;
  }

  var ServiceResponse_$$$_1$ = {

  };

  // SystemQut.IO.StringWriter

  function StringWriter() {
    this._stringBuilder$1 = new ss.StringBuilder();
    TextWriter.call(this);
  }

  var StringWriter$ = {
    writeString: function(value) {
      this._stringBuilder$1.append(value);
    }
    ,
    toString: function() {
      return this._stringBuilder$1.toString();
    }

  };

  // SystemQut.IO.NullTextWriter

  function NullTextWriter() {
    TextWriter.call(this);
  }

  var NullTextWriter$ = {
    writeString: function(value) {
    }

  };

  // SystemQut.IO.StringReader

  function StringReader(source) {
    this._idx$1 = 0;
    TextReader.call(this);

    if (!ss.isValue(source)) {
      throw new Error('Source must be defined and not null.');
    }

    this._source$1 = source;
    this._idx$1 = 0;
  }

  var StringReader$ = {
    close: function() {
    }
    ,
    get_endOfStream: function() {
      return this._idx$1 >= this._source$1.length;
    }
    ,
    peek: function() {
      return (this.get_endOfStream()) ? '\u0000' : this._source$1[this._idx$1];
    }
    ,
    readChar: function() {
      return (this.get_endOfStream()) ? '\u0000' : this._source$1[this._idx$1++];
    }
    ,
    read: function(buffer, index, count) {
      var charactersRead = 0;
      while (charactersRead < count && !this.get_endOfStream()) {
        buffer[index + charactersRead] = this.readChar();
        charactersRead++;
      }
      return charactersRead;
    }
    ,
    readBlock: function(buffer, index, count) {
      return this.read(buffer, index, count);
    }
    ,
    readLine: function() {

      if (this.get_endOfStream()) {
        return null;
      }

      var result = new ss.StringBuilder();
      while (!this.get_endOfStream() && this._source$1[this._idx$1] !== '\r' && this._source$1[this._idx$1] !== '\n') {
        result.append(this.readChar());
      }

      if (!this.get_endOfStream() && this._source$1[this._idx$1] === '\r') {
        this._idx$1++;
      }

      if (!this.get_endOfStream() && this._source$1[this._idx$1] === '\n') {
        this._idx$1++;
      }

      return result.toString();
    }
    ,
    readToEnd: function() {
      var result = (this.get_endOfStream()) ? '' : this._source$1.substring(this._idx$1);
      this._idx$1 = this._source$1.length;
      return result;
    }
    ,
    readToFirst: function(querySubString) {
      var loc = this._source$1.indexOf(querySubString, this._idx$1);
      var result = (loc < 0) ? this._source$1.substring(this._idx$1) : this._source$1.substring(this._idx$1, loc);
      this._idx$1 += result.length;
      return result;
    }
    ,
    readToFirstChar: function(terminator) {
      var loc = this._source$1.indexOf(terminator, this._idx$1);
      var result = (loc < 0) ? this._source$1.substring(this._idx$1) : this._source$1.substring(this._idx$1, loc);
      this._idx$1 += result.length;
      return result;
    }

  };

  // SystemQut.Xml.XmlCDataNode

  function XmlCDataNode(id, content) {
    Node.call(this, id);
    this._content$1 = content;
  }

  var XmlCDataNode$ = {
    toString: function() {
      return ss.format('<![CDATA[{0}]]>', this._content$1);
    }
    ,
    get_value: function() {
      return this._content$1;
    }

  };

  // SystemQut.Xml.XmlCommentNode

  function XmlCommentNode(id, content) {
    Node.call(this, id);
    this._content$1 = content;
  }

  var XmlCommentNode$ = {
    toString: function() {
      return ss.format('<!--{0}-->', this._content$1);
    }
    ,
    get_value: function() {
      return this._content$1;
    }

  };

  // SystemQut.Xml.XmlDeclarationNode

  function XmlDeclarationNode(id, name, attributes) {
    this._attributes$1 = {};
    Node.call(this, id);
    this._name$1 = name;
    this._addAttributes$1(attributes);
  }

  var XmlDeclarationNode$ = {
    get_name: function() {
      return this._name$1;
    }
    ,
    get_attributes: function() {
      return this._attributes$1;
    }
    ,
    _addAttributes$1: function(attributes) {
      ss.clearKeys(this._attributes$1);

      for (var $key1 in attributes) {
        var kvp = { key: $key1, value: attributes[$key1] };
        this._attributes$1[kvp.key] = Node.decode(kvp.value);
      }

    }
    ,
    toString: function() {
      var sb = new ss.StringBuilder();

      var $enum1 = ss.enumerate(ss.keys(this._attributes$1));
      while ($enum1.moveNext()) {
        var key = $enum1.get_current();
        sb.append(ss.format(' {0}="{1}"', key, Node.encode(this._attributes$1[key])));
      }

      var attrs = sb.toString();
      return ss.format('<?{0}{1} ?>', this._name$1, attrs);
    }
    ,
    get_value: function() {
      return '';
    }

  };

  // SystemQut.Xml.XmlProcessingInstructionNode

  function XmlProcessingInstructionNode(id, name, attributes) {
    this._attributes$1 = {};
    Node.call(this, id);
    this._name$1 = name;
    this._addAttributes$1(attributes);
  }

  var XmlProcessingInstructionNode$ = {
    get_name: function() {
      return this._name$1;
    }
    ,
    get_attributes: function() {
      return this._attributes$1;
    }
    ,
    _addAttributes$1: function(attributes) {
      ss.clearKeys(this._attributes$1);

      for (var $key1 in attributes) {
        var kvp = { key: $key1, value: attributes[$key1] };
        this._attributes$1[kvp.key] = Node.decode(kvp.value);
      }

    }
    ,
    toString: function() {
      var sb = new ss.StringBuilder();

      var $enum1 = ss.enumerate(ss.keys(this._attributes$1));
      while ($enum1.moveNext()) {
        var key = $enum1.get_current();
        sb.append(ss.format(' {0}="{1}"', key, Node.encode(this._attributes$1[key])));
      }

      var attrs = sb.toString();
      return ss.format('<!{0}{1} !>', this._name$1, attrs);
    }
    ,
    get_value: function() {
      return '';
    }

  };

  // SystemQut.Xml.Element

  function Element(id, tag, attributeValuePairs, children) {
    this.attributes = {};
    this.children = [];
    this._mIsDocumentRoot$1 = false;
    Node.call(this, id);
    this.set_tag(tag);
    this.addAttributes(attributeValuePairs);

    if (children != null) {

      var $enum1 = ss.enumerate(children);
      while ($enum1.moveNext()) {
        var child = $enum1.get_current();
        this.children.push(child);
      }

    }

    this._mIsDocumentRoot$1 = false;
  }

  var Element$ = {
    addAttributes: function(attributeValuePairs) {

      if (attributeValuePairs != null) {

        for (var $key1 in attributeValuePairs) {
          var kvp = { key: $key1, value: attributeValuePairs[$key1] };
          this.attributes[kvp.key] = Node.decode(kvp.value);
        }

      }

    }
    ,
    get_tag: function() {
      return this.tag;
    }
    ,
    set_tag: function(value) {
      this.tag = ss.value(value, '');
      return value;
    }
    ,
    get_attributes: function() {
      return this.attributes;
    }
    ,
    get_children: function() {
      return this.children;
    }
    ,
    foreachChild: function(action) {

      for (var i = 0; i < this.children.length; i++) {
        action(this.children[i], i);
      }

    }
    ,
    foreachChildElement: function(action) {

      for (var i = 0; i < this.children.length; i++) {

        if (ss.canCast(this.children[i], Element)) {
          action(this.children[i], i);
        }

      }

    }
    ,
    get__isDocumentRoot: function() {
      return this._mIsDocumentRoot$1;
    }
    ,
    set__isDocumentRoot: function(value) {
      this._mIsDocumentRoot$1 = value;
      return value;
    }
    ,
    toString: function() {
      var sb = new ss.StringBuilder();

      var $enum1 = ss.enumerate(ss.keys(this.attributes));
      while ($enum1.moveNext()) {
        var key = $enum1.get_current();
        sb.append(ss.format(' {0}="{1}"', key, Node.encode(this.attributes[key])));
      }

      var attrs = sb.toString();
      sb.clear();

      var $enum2 = ss.enumerate(this.children);
      while ($enum2.moveNext()) {
        var child = $enum2.get_current();
        sb.append(child.toString());
      }

      var content = sb.toString();
      return (this.children.length > 0) ? ss.format('<{0}{1}>{2}</{0}>', this.tag, attrs, content) : ss.format('<{0}{1}/>', this.tag, attrs);
    }
    ,
    appendText: function(id, text) {
      var node = new TextNode(id, text);
      this.children.push(node);
      return node;
    }
    ,
    appendNode: function(id, tag) {
      var element = new Element(id, tag, null, null);
      this.children.push(element);
      return element;
    }
    ,
    appendNodes: function(nodes) {
      Arrays.addRange_$$$_1(this.children, nodes);
    }
    ,
    append: function(obj) {

      if (ss.canCast(obj, Node)) {
        var node = obj;
        this.children.push(node);
        return node;
      }
      else {

        if ((obj === null)) {
          obj = 'null';
        }

        if ((obj === undefined)) {
          obj = 'undefined';
        }

        return this.appendText(null, obj.toString());
      }

    }
    ,
    getChildrenByTagName: function(tagName) {
      var results = [];
      this._getChildrenByTagNameAux$1(tagName, results);
      return results;
    }
    ,
    getChildrenById: function(id) {
      var results = [];
      this._getChildrenByIdAux$1(id, results);
      return results;
    }
    ,
    _getChildrenByTagNameAux$1: function(tagName, results) {

      for (var i = 0; i < this.children.length; i++) {

        if (ss.canCast(this.children[i], Element)) {
          var element = this.children[i];

          if (element.tag === tagName) {
            results.push(element);
          }

          element._getChildrenByTagNameAux$1(tagName, results);
        }

      }

    }
    ,
    _getChildrenByIdAux$1: function(id, results) {

      for (var i = 0; i < this.children.length; i++) {

        if (this.children[i].get_id() === id) {
          results.push(this.children[i]);
        }

        if (ss.canCast(this.children[i], Element)) {
          var element = this.children[i];
          element._getChildrenByIdAux$1(id, results);
        }

      }

    }
    ,
    getEnumerator: function() {
      return new XmlElementEnumerator(this);
    }
    ,
    getDescendants: function(childName) {
      return Enumerable.where_$$$_1(this, function(child) {
        return (ss.canCast(child, Element)) && (child).get_tag() === childName;
      });
    }
    ,
    get_value: function() {
      var sb = new ss.StringBuilder();

      var $enum1 = ss.enumerate(this.children);
      while ($enum1.moveNext()) {
        var child = $enum1.get_current();
        sb.append(child.toString());
      }

      return sb.toString();
    }

  };

  // SystemQut.Xml.TextNode

  function TextNode(id, text) {
    Node.call(this, id);
    this.set_text(Node.decode(text));
  }

  var TextNode$ = {
    get_text: function() {
      return this._text$1;
    }
    ,
    set_text: function(value) {
      this._text$1 = ss.value(value, '');
      return value;
    }
    ,
    toString: function() {
      return Node.encode(this._text$1);
    }
    ,
    get_value: function() {
      return this._text$1;
    }

  };

  // SystemQut.Controls.Button

  function Button(domElement) {
    var $this = this;

    CodeBehind.call(this, (domElement != null) ? domElement : domElement = document.createElement('button'));
    domElement.addEventListener('click', function(eventArgs) {

      if ($this.___clicked$1 != null) {
        $this.___clicked$1($this, new ElementEventArgs(eventArgs));
      }

    }, false);
  }

  var Button$ = {
    add_clicked: function(value) {
      this.___clicked$1 = ss.bindAdd(this.___clicked$1, value);
    },
    remove_clicked: function(value) {
      this.___clicked$1 = ss.bindSub(this.___clicked$1, value);
    }
  };

  // SystemQut.Controls.CheckBox

  function CheckBox(domElement) {
    CodeBehind.call(this, (domElement != null) ? domElement : domElement = HtmlUtil.createElement('input', null, { type: 'checkbox' }));
    domElement.addEventListener('click', ss.bind('_checkBoxClicked$1', this), false);
  }

  var CheckBox$ = {
    _checkBoxClicked$1: function(e) {
      this.notifyPropertyChanged('IsChecked');
    }
    ,
    get_isChecked: function() {
      return (this._domElement).checked;
    }
    ,
    set_isChecked: function(value) {

      if (value === (this._domElement).checked) {
        return;
      }

      (this._domElement).checked = value;
      this.notifyPropertyChanged('IsChecked');
      return value;
    }

  };

  // SystemQut.Controls.RecordNavigator

  function RecordNavigator(element) {
    this._min$1 = undefined;
    this._current$1 = undefined;
    this._max$1 = undefined;
    this._format$1 = 'Record {0} of {2}';
    CodeBehind.call(this, (element == null) ? document.createElement('div') : element);
    this._formatter$1 = ss.bind('_defaultFormatter$1', this);
    this._domElement.innerHTML = '';
    this._domElement.classList.add(RecordNavigator.get_csS_CLASS());
    var leftSpan = HtmlUtil.createElement('span', this._domElement, { style: 'float: left;' });
    this._gotoFirst$1 = new GotoFirstRecordButton(null);
    this._gotoFirst$1._domElement.classList.add(RecordNavigator.get_buttoN_FIRST_CSS_CLASS());
    this._gotoFirst$1._domElement.style.marginLeft = '0px';
    this._gotoFirst$1.addElementTo(leftSpan);
    this._gotoPrevious$1 = new GotoPreviousRecordButton(null);
    this._gotoPrevious$1._domElement.classList.add(RecordNavigator.get_buttoN_PREV_CSS_CLASS());
    this._gotoPrevious$1._domElement.style.marginLeft = '0px';
    this._gotoPrevious$1.addElementTo(leftSpan);
    this._text$1 = new TextControl(null, 'div');
    this._text$1._domElement.style.display = 'inline-block';
    this._text$1.addElementTo(this._domElement);
    var rightSpan = HtmlUtil.createElement('span', this._domElement, { style: 'float: right;' });
    this._gotoNext$1 = new GotoNextRecordButton(null);
    this._gotoNext$1._domElement.classList.add(RecordNavigator.get_buttoN_NEXT_CSS_CLASS());
    this._gotoNext$1._domElement.style.marginRight = '0px';
    this._gotoNext$1.addElementTo(rightSpan);
    this._gotoLast$1 = new GotoLastRecordButton(null);
    this._gotoLast$1._domElement.classList.add(RecordNavigator.get_buttoN_LAST_CSS_CLASS());
    this._gotoLast$1._domElement.style.marginRight = '0px';
    this._gotoLast$1.addElementTo(rightSpan);
    this._text$1.bind('Text', 'Text', 1);
    this._gotoFirst$1.bind('IsFirstRecord', 'IsDisabled', 1);
    this._gotoPrevious$1.bind('IsFirstRecord', 'IsDisabled', 1);
    this._gotoNext$1.bind('IsLastRecord', 'IsDisabled', 1);
    this._gotoLast$1.bind('IsLastRecord', 'IsDisabled', 1);
    this._gotoFirst$1.add_clicked(ss.bind('_button_Clicked$1', this));
    this._gotoPrevious$1.add_clicked(ss.bind('_button_Clicked$1', this));
    this._gotoNext$1.add_clicked(ss.bind('_button_Clicked$1', this));
    this._gotoLast$1.add_clicked(ss.bind('_button_Clicked$1', this));
    var format = this.getAttribute_$$$_1('data-format');

    if (ss.isValue(format)) {
      this._format$1 = format;
    }

    this.set_dataContext(this);
  }

  RecordNavigator.get_csS_CLASS = function() {
    return 'SystemQUT_RecordNavigator';
  };

  RecordNavigator.get_buttoN_FIRST_CSS_CLASS = function() {
    return 'SystemQUT_FirstButton';
  };

  RecordNavigator.get_buttoN_PREV_CSS_CLASS = function() {
    return 'SystemQUT_PrevButton';
  };

  RecordNavigator.get_buttoN_NEXT_CSS_CLASS = function() {
    return 'SystemQUT_NextButton';
  };

  RecordNavigator.get_buttoN_LAST_CSS_CLASS = function() {
    return 'SystemQUT_LastButton';
  };

  var RecordNavigator$ = {
    _button_Clicked$1: function(sender, eventArgs) {

      if (sender === this._gotoFirst$1) {
        this.set_current(this._min$1);
      }
      else 
      if (sender === this._gotoLast$1) {
        this.set_current(this._max$1);
      }
      else 
      if (sender === this._gotoNext$1) {
        this.set_current(this.get_current() + 1) - 1;
      }
      else 
      if (sender === this._gotoPrevious$1) {
        this.set_current(this.get_current() - 1) + 1;
      }

    }
    ,
    get_min: function() {
      return this._min$1;
    }
    ,
    set_min: function(value) {

      if (value === this._min$1) {
        return;
      }

      this._min$1 = value;
      var justNotifyMin = false;

      if (value > this._max$1) {
        this.set_max(undefined);
        justNotifyMin = true;
      }

      if (this._current$1 < this._min$1) {
        this.set_current(undefined);
        justNotifyMin = true;
      }

      if (justNotifyMin) {
        this.notifyPropertyChanged('Min');
      }
      else {
        this.notifyPropertyChanged('Min,IsFirstRecord,IsLastRecord,Text');
      }

      return value;
    }
    ,
    get_max: function() {
      return this._max$1;
    }
    ,
    set_max: function(value) {

      if (value === this._max$1) {
        return;
      }

      this._max$1 = value;
      var justNotifyMax = false;

      if (value < this._min$1) {
        this.set_min(undefined);
        justNotifyMax = true;
      }

      if (this._current$1 > this._max$1) {
        this.set_current(undefined);
        justNotifyMax = true;
      }

      if (justNotifyMax) {
        this.notifyPropertyChanged('Min');
      }
      else {
        this.notifyPropertyChanged('Max,IsFirstRecord,IsLastRecord,Text');
      }

      return value;
    }
    ,
    get_current: function() {
      return this._current$1;
    }
    ,
    set_current: function(value) {

      if (value === this._current$1) {
        return;
      }

      var newValue = (!ss.isValue(value) || value < this._min$1 || value > this._max$1) ? undefined : value;

      if (newValue === this._current$1) {
        return;
      }

      this._current$1 = newValue;
      this.notifyPropertyChanged('Current,IsFirstRecord,IsLastRecord,Text');
      return value;
    }
    ,
    get_isFirstRecord: function() {
      return !ss.isValue(this._current$1) || !ss.isValue(this._min$1) || !ss.isValue(this._max$1) || this._current$1 === this._min$1;
    }
    ,
    get_isLastRecord: function() {
      return !ss.isValue(this._current$1) || !ss.isValue(this._min$1) || !ss.isValue(this._max$1) || this._current$1 === this._max$1;
    }
    ,
    get_text: function() {
      return this._formatter$1(this._format$1, this._current$1, this._min$1, this._max$1);
    }
    ,
    get_format: function() {
      return this._format$1;
    }
    ,
    set_format: function(value) {

      if (this._format$1 === value) {
        return;
      }

      this._format$1 = value;
      this.notifyPropertyChanged('Text,Format');
      return value;
    }
    ,
    _defaultFormatter$1: function(format, current, min, max) {
      return (ss.isValue(current) && ss.isValue(min) && ss.isValue(max)) ? ss.format(format, current, min, max) : '';
    }
    ,
    get_formatter: function() {
      return this._formatter$1;
    }
    ,
    set_formatter: function(value) {

      if (value == this.get_formatter()) {
        return;
      }

      this._formatter$1 = (!ss.isValue(value)) ? ss.bind('_defaultFormatter$1', this) : value;
      this.notifyPropertyChanged('Text,Formatter');
      return value;
    }

  };

  // SystemQut.Controls.Select

  function Select(domElement) {
    this._items$1 = [];
    CodeBehind.call(this, (domElement == null) ? domElement = document.createElement('select') : domElement);

    for (var i = 0; i < domElement.options.length; i++) {
      var option = domElement.options[i];
      var codebehind = Control.getCodeBehind(option);

      if (ss.isValue(codebehind)) {
        this._items$1.push(codebehind);
      }
      else {
        this._items$1.push(new SelectItem(option));
      }

    }

    domElement.addEventListener('change', ss.bind('_changeListener$1', this), false);
  }

  var Select$ = {
    add_selectionChanged: function(value) {
      this.___selectionChanged$1 = ss.bindAdd(this.___selectionChanged$1, value);
    },
    remove_selectionChanged: function(value) {
      this.___selectionChanged$1 = ss.bindSub(this.___selectionChanged$1, value);
    },
    _changeListener$1: function(elementEvent) {

      if (this.___selectionChanged$1 != null) {
        this.___selectionChanged$1(this, new ElementEventArgs(elementEvent));
      }

    }
    ,
    get_items: function() {
      return new ProjectedList(this._items$1, function(item) {
        return (item).get_item();
      });
    }
    ,
    set_items: function(value) {
      var select = this._domElement;
      while (select.options.length > 0) {
        select.remove(0);
      }

      var $enum1 = ss.enumerate(this._items$1);
      while ($enum1.moveNext()) {
        var item = $enum1.get_current();
        item.dispose();
      }

      this._items$1.length = 0;

      var $enum2 = ss.enumerate(value);
      while ($enum2.moveNext()) {
        var item = $enum2.get_current();
        var selectItem = new SelectItem(null);
        selectItem.set_item(item);
        this._items$1.push(selectItem);
        select.add(selectItem._domElement);
      }

      return value;
    }
    ,
    get_selectedItems: function() {
      return new FilteredList_$$$_2(this._items$1, function(selectItem) {
        return selectItem.get_isSelected();
      }, function(selectItem) {
        return selectItem.get_item();
      });
    }
    ,
    set_selectedItems: function(value) {

      var $enum1 = ss.enumerate(this._items$1);
      while ($enum1.moveNext()) {
        var selectItem = $enum1.get_current();
        selectItem.set_isSelected(false);

        var $enum2 = ss.enumerate(value);
        while ($enum2.moveNext()) {
          var item = $enum2.get_current();

          if (selectItem.get_item() === item) {
            selectItem.set_isSelected(true);
            break;
          }

        }

      }

      return value;
    }
    ,
    get_selectElement: function() {
      return this._domElement;
    }
    ,
    get_selectedIndex: function() {
      return (this._domElement).selectedIndex;
    }
    ,
    set_selectedIndex: function(value) {
      (this._domElement).selectedIndex = value;
      return value;
    }

  };

  // SystemQut.Controls.SelectItem

  function SelectItem(option) {
    CodeBehind.call(this, (option == null) ? SelectItem._dummyOption$1 = document.createElement('option') : option);
    this._item$1 = (option == null) ? '' : option.text;
  }

  var SelectItem$ = {
    get_item: function() {
      return this._item$1;
    }
    ,
    set_item: function(value) {

      if (this._item$1 === value) {
        return;
      }

      this._item$1 = value;
      var text = Objects.toString(this._item$1, 'undefined');
      (this._domElement).text = text;
      (this._domElement).value = text;
      return value;
    }
    ,
    get_isSelected: function() {
      return (this._domElement).selected;
    }
    ,
    set_isSelected: function(value) {

      if (value === this.get_isSelected()) {
        return;
      }

      (this._domElement).selected = value;
      return value;
    }

  };

  // SystemQut.Controls.DataGrid

  function DataGrid(domElement) {
    this.columns = [];
    this.items = [];
    this.rows = [];
    this.filter = null;
    this.orderBy = null;
    this._selectedRow$1 = null;
    this._suspendNotify$1 = false;
    this._somethingChanged$1 = false;
    this._sortAscending$1 = 0;
    CodeBehind.call(this, (domElement != null) ? domElement : domElement = document.createElement('tr'));
    this._detectColumns$1();
  }

  DataGrid.get_headinG_CSS_CLASS_ATTR = function() {
    return 'data-heading-css-class';
  };

  DataGrid.get_roW_CSS_CLASS_ATTR = function() {
    return 'data-row-css-class';
  };

  DataGrid.get_alternatE_ROW_CSS_CLASS_ATTR = function() {
    return 'data-alternate-row-css-class';
  };

  DataGrid.get_iS_MULTISELECT_ATTR = function() {
    return 'data-is-multi-select';
  };

  var DataGrid$ = {
    get_columns: function() {
      return this.columns;
    }
    ,
    get_itemsSource: function() {
      return this.itemsSource;
    }
    ,
    set_itemsSource: function(value) {

      if (Objects.identical(this.itemsSource, value)) {
        return;
      }

      this._sortAscending$1 = 0;

      if (this.itemsSource != null) {
        this.itemsSource.remove_collectionChanged(ss.bind('_itemsChanged$1', this));
      }

      this.itemsSource = value;

      if (this.itemsSource != null) {
        this.itemsSource.add_collectionChanged(ss.bind('_itemsChanged$1', this));
      }

      this.refresh();
      this.notifyPropertyChanged('ItemsSource');
      return value;
    }
    ,
    get_headingRowCssClass: function() {
      return this.getAttribute_$$$_1(DataGrid.get_headinG_CSS_CLASS_ATTR());
    }
    ,
    set_headingRowCssClass: function(value) {
      this.setAttribute_$$$_1(DataGrid.get_headinG_CSS_CLASS_ATTR(), value);

      if (this.header != null) {
        this.header.className = value;
      }

      return value;
    }
    ,
    get_rowCssClass: function() {
      return this.getAttribute_$$$_1(DataGrid.get_roW_CSS_CLASS_ATTR());
    }
    ,
    set_rowCssClass: function(value) {
      this.setAttribute_$$$_1(DataGrid.get_roW_CSS_CLASS_ATTR(), value);
      return value;
    }
    ,
    get_alternateRowCssClass: function() {
      return this.getAttribute_$$$_1(DataGrid.get_alternatE_ROW_CSS_CLASS_ATTR());
    }
    ,
    set_alternateRowCssClass: function(value) {
      this.setAttribute_$$$_1(DataGrid.get_alternatE_ROW_CSS_CLASS_ATTR(), value);
      return value;
    }
    ,
    get_filter: function() {
      return this.filter;
    }
    ,
    set_filter: function(value) {

      if (this.filter === value) {
        return;
      }

      this.filter = value;
      this.refreshBody();
      return value;
    }
    ,
    _detectColumns$1: function() {
      var children = this._domElement.getElementsByTagName('thead');
      this.thead = (children.length > 0) ? children[0] : null;
      children = this._domElement.getElementsByTagName('tbody');
      this.tbody = (children.length > 0) ? children[0] : null;
      children = this._domElement.getElementsByTagName('tr');
      this.header = (children.length > 0) ? children[0] : null;
      var firstRow = (children.length > 1) ? children[1] : null;
      var secondRow = (children.length > 2) ? children[2] : null;

      if (this.header == null) {
        return;
      }

      for (var i = 0; i < this.header.childNodes.length; i++) {
        var columnDefinition = (this.header.childNodes[i]).__codebehind__;

        if (!(ss.canCast(columnDefinition, DataGridColumnDefinition))) {
          continue;
        }

        this.columns.push(columnDefinition);
        columnDefinition.set_dataGrid(this);
      }

      if (ss.whitespace(this.get_headingRowCssClass())) {
        this.set_headingRowCssClass(this.header.className);
      }

      if (ss.whitespace(this.get_rowCssClass()) && firstRow != null) {
        this.set_rowCssClass(firstRow.className);
      }

      if (ss.whitespace(this.get_alternateRowCssClass()) && secondRow != null) {
        this.set_alternateRowCssClass(secondRow.className);
      }

      if (ss.whitespace(this.get_alternateRowCssClass())) {
        this.set_alternateRowCssClass(this.get_rowCssClass());
      }

    }
    ,
    refresh: function() {
      this._refreshHeader$1();
      this.refreshBody();
    }
    ,
    _refreshHeader$1: function() {

      if (this.thead == null) {
        this.thead = HtmlUtil.createElement('thead', this._domElement, null);
      }

      if (this.header == null) {
        this.header = HtmlUtil.createElement('tr', this.thead, null);
        var headerClass = this.get_headingRowCssClass();

        if (!ss.whitespace(headerClass)) {
          this.header.className = headerClass;
        }

      }
      else {
        while (this.header.firstChild != null) {
          this.header.removeChild(this.header.firstChild);
        }
      }

      var $enum1 = ss.enumerate(this.columns);
      while ($enum1.moveNext()) {
        var col = $enum1.get_current();
        col.addElementTo(this.header);
      }

    }
    ,
    refreshBody: function() {
      var $this = this;

      if (this.tbody == null) {
        this.tbody = HtmlUtil.createElement('tbody', this._domElement, null);
      }

      while (this.tbody.firstChild != null) {
        this.tbody.removeChild(this.tbody.firstChild);
      }
      var currentSelectedItem = (this._selectedRow$1 != null) ? this._selectedRow$1.get_item() : null;
      this._selectedRow$1 = null;
      this.items.length = 0;
      this.rows.length = 0;

      if (this.itemsSource == null) {
        return;
      }

      var $enum1 = ss.enumerate(this.itemsSource);
      while ($enum1.moveNext()) {
        var item = $enum1.get_current();
        this.items.push(item);
      }

      if (this.orderBy != null && !!this._sortAscending$1) {

        if (this._sortAscending$1 === 2) {
          this.items.sort(this.orderBy);
        }
        else {
          this.items.sort(function(x, y) {
            return -$this.orderBy(x, y);
          });
        }

      }

      var alternateClassName = this.get_alternateRowCssClass();
      var rowClassName = this.get_rowCssClass();
      var filteredList = new FilteredList_$$$_2(this.items, this.filter, null);
      var index = 0;

      var $enum2 = ss.enumerate(filteredList);
      while ($enum2.moveNext()) {
        var item = $enum2.get_current();
        var row = new DataGridRow(item, index++, this.columns, rowClassName, alternateClassName);
        this.rows.push(row);
        row.addElementTo(this.tbody);

        if (currentSelectedItem != null && currentSelectedItem === item) {
          row.set_isSelected(true);
          this._selectedRow$1 = row;
        }

        row.add_propertyChanged(ss.bind('_row_PropertyChanged$1', this));
      }

      if (currentSelectedItem != null) {
        this.notifyPropertyChanged('SelectedIndex');
      }

    }
    ,
    _row_PropertyChanged$1: function(sender, args) {
      var row = ss.safeCast(sender, DataGridRow);
      var rowSelected = row.get_isSelected();

      if (this._suspendNotify$1) {
        this._somethingChanged$1 = true;
        return;
      }

      if (!this.get_isMultipleSelection()) {

        if (rowSelected && this._selectedRow$1 !== row) {
          var oldSelectedRow = this._selectedRow$1;
          this._selectedRow$1 = row;

          if (oldSelectedRow != null) {
            oldSelectedRow.set_isSelected(false);
          }

          this.notifyPropertyChanged('SelectedIndex,SelectedItem');
        }
        else 
        if ((!rowSelected) && this._selectedRow$1 === row) {
          this._selectedRow$1 = null;
          this.notifyPropertyChanged('SelectedIndex,SelectedItem');
        }

      }
      else {
        this.notifyPropertyChanged('SelectedItems');
      }

    }
    ,
    _itemsChanged$1: function(sender, args) {
      this.refreshBody();
    }
    ,
    get_visibleItems: function() {
      return new FilteredList_$$$_2(this.items, this.filter, null);
    }
    ,
    get_selectedItems: function() {
      var selectedItems = [];

      var $enum1 = ss.enumerate(this.rows);
      while ($enum1.moveNext()) {
        var row = $enum1.get_current();

        if (row.get_isSelected()) {
          selectedItems.push(row.get_item());
        }

      }

      return selectedItems;
    }
    ,
    set_selectedItems: function(value) {
      this.set_suspendNotify(true);

      if (this.get_isMultipleSelection()) {

        var $enum2 = ss.enumerate(this.rows);
        while ($enum2.moveNext()) {
          var row = $enum2.get_current();
          row.set_isSelected((this.items.indexOf(row.get_item()) >= 0));
        }

      }
      else {

        var $enum3 = ss.enumerate(this.rows);
        while ($enum3.moveNext()) {
          var row = $enum3.get_current();
          row.set_isSelected(this.items[0] === row.get_item());
        }

      }

      this.set_suspendNotify(false);

      if (this._somethingChanged$1) {
        this.notifyPropertyChanged('SelectedItems');
      }

      return value;
    }
    ,
    get_isMultipleSelection: function() {
      return !ss.compareStrings('true', this.getAttribute_$$$_1(DataGrid.get_iS_MULTISELECT_ATTR()), true);
    }
    ,
    set_isMultipleSelection: function(value) {
      this.setAttribute_$$$_1(DataGrid.get_iS_MULTISELECT_ATTR(), Objects.toString(value, 'false'));
      return value;
    }
    ,
    get_selectedIndex: function() {
      return (this._selectedRow$1 == null) ? -1 : this._selectedRow$1.get_index();
    }
    ,
    set_selectedIndex: function(value) {

      if (value < -1 || value >= this.rows.length) {
        value = -1;
      }

      if (ss.isValue(this._selectedRow$1)) {

        if (this._selectedRow$1.get_index() === value) {
          return;
        }

      }
      else {

        if (value === -1) {
          return;
        }

      }

      var newSelectedRow = (value < 0 || !ss.isValue(value)) ? null : this.rows[value];

      if (newSelectedRow == null) {

        if (this._selectedRow$1 != null) {
          this._selectedRow$1.set_isSelected(false);
        }

      }
      else {
        newSelectedRow.set_isSelected(true);
      }

      this.notifyPropertyChanged('SelectedIndex,SelectedItem');
      return value;
    }
    ,
    get_selectedItem: function() {
      return (this._selectedRow$1 != null) ? this._selectedRow$1.get_item() : null;
    }
    ,
    set_selectedItem: function(value) {

      if (this.get_selectedItem() === value) {
        return;
      }

      this.set_suspendNotify(true);

      var $enum1 = ss.enumerate(this.rows);
      while ($enum1.moveNext()) {
        var row = $enum1.get_current();
        row.set_isSelected(row.get_item() === value);
      }

      this.set_suspendNotify(false);

      if (this._somethingChanged$1) {
        this.notifyPropertyChanged('SelectedIndex,SelectedItem');
      }

      return value;
    }
    ,
    get_suspendNotify: function() {
      return this._suspendNotify$1;
    }
    ,
    set_suspendNotify: function(value) {
      this._suspendNotify$1 = value;
      this._somethingChanged$1 = false;
      return value;
    }
    ,
    itemAt: function(index) {
      return this.rows[index].get_item();
    }
    ,
    get_orderBy: function() {
      return this.orderBy;
    }
    ,
    set_orderBy: function(value) {

      if (this.orderBy === value) {
        this._sortAscending$1 = (this._sortAscending$1 === 2) ? 1 : 2;
      }
      else {
        this.orderBy = value;
        this._sortAscending$1 = 2;
      }

      this.refreshBody();
      return value;
    }

  };

  // SystemQut.Controls.DataGridCell

  function DataGridCell() {
    CodeBehind.call(this, document.createElement('td'));
    this._domElement.classList.add(this.get_cssClass());
  }

  var DataGridCell$ = {

  };

  // SystemQut.Controls.DataGridColumnDefinition

  function DataGridColumnDefinition(domElement) {
    this._bindingMode$1 = 0;
    CodeBehind.call(this, (domElement != null) ? domElement : domElement = document.createElement('td'));
    domElement.addEventListener('click', ss.bind('headingClicked', this), false);
    domElement.style.cursor = 'pointer';
  }

  DataGridColumnDefinition.get_invaliD_TARGET_PROPERTY = function() {
    return 'DataGrid column data-binding should not specify the name of the target property.';
  };

  var DataGridColumnDefinition$ = {
    get_sourcePropertyName: function() {
      return this._sourcePropertyName$1;
    }
    ,
    get_bindingMode: function() {
      return this._bindingMode$1;
    }
    ,
    setUpBinding: function(sourcePropertyName, targetPropertyName, bindingMode) {

      if (!ss.whitespace(targetPropertyName)) {
        throw new Error(DataGridColumnDefinition.get_invaliD_TARGET_PROPERTY());
      }

      this._bindingMode$1 = bindingMode;
      this._sourcePropertyName$1 = sourcePropertyName;
    }
    ,
    get_dataGrid: function() {
      return this._dataGrid$1;
    }
    ,
    set_dataGrid: function(value) {
      this._dataGrid$1 = value;
      return value;
    }
    ,
    headingClicked: function(args) {
      this._dataGrid$1.set_orderBy(ss.bind('orderBy', this));
    }

  };

  // SystemQut.Controls.DataGridRow

  function DataGridRow(item, index, columns, rowCssClass, alternateRowCssClass) {
    this._index$1 = 0;
    this._cells$1 = [];
    this._isSelected$1 = false;
    CodeBehind.call(this, document.createElement('tr'));
    this._item$1 = item;
    this._index$1 = index;

    var $enum1 = ss.enumerate(columns);
    while ($enum1.moveNext()) {
      var column = $enum1.get_current();
      var cell = column.createCell(item, column.get_sourcePropertyName(), column.get_bindingMode());
      cell.addElementTo(this._domElement);

      if (!(ss.canCast(cell, DataGridCheckBoxCell))) {
        cell._domElement.addEventListener('click', ss.bind('_cell_Clicked$1', this), false);
      }

    }

    this._domElement.classList.add(DataGridRow.get_csS_CLASS());
    var className = (!(index % 2)) ? rowCssClass : alternateRowCssClass;

    if (ss.isValue(className) && ss.trim(className).length > 0) {
      this._domElement.classList.add(ss.trim(className));
    }

  }

  DataGridRow.get_csS_CLASS = function() {
    return 'SystemQUT_DataGridRow';
  };

  var DataGridRow$ = {
    _cell_Clicked$1: function(args) {
      this.set_isSelected((args.ctrlKey) ? !this._isSelected$1 : true);
    }
    ,
    getEnumerator: function() {
      return ss.enumerate(this._cells$1);
    }
    ,
    get_isSelected: function() {
      return this._isSelected$1;
    }
    ,
    set_isSelected: function(value) {

      if (value === this._isSelected$1) {
        return;
      }

      this._isSelected$1 = value;
      this._domElement.classList.toggle(CodeBehind.get_csS_SELECTED_CLASS());
      this.notifyPropertyChanged('IsSelected');
      return value;
    }
    ,
    get_index: function() {
      return this._index$1;
    }
    ,
    get_item: function() {
      return this._item$1;
    }
    ,
    toString: function() {
      return ss.format('Row {0}: {1}', this._index$1, this._item$1);
    }

  };

  // SystemQut.Controls.TextControl

  function TextControl(element, tag) {
    CodeBehind.call(this, (element != null) ? element : document.createElement(tag));
    this._domElement.classList.add(TextControl.get_csS_CLASS());
  }

  TextControl.get_csS_CLASS = function() {
    return 'SystemQUT_Text';
  };

  var TextControl$ = {
    get_text: function() {
      return this._domElement.textContent;
    }
    ,
    set_text: function(value) {
      this._domElement.textContent = value;
      return value;
    }

  };

  // SystemQut.Controls.TextBox

  function TextBox(domElement) {
    CodeBehind.call(this, (domElement == null) ? HtmlUtil.createElement('input', null, { type: 'text' }) : domElement);
  }

  var TextBox$ = {
    get_placeHolder: function() {
      return this.getAttribute_$$$_1('placeholder');
    }
    ,
    set_placeHolder: function(value) {
      this.setAttribute_$$$_1('placeholder', value);
      return value;
    }
    ,
    get_text: function() {
      return (this._domElement).value;
    }
    ,
    set_text: function(value) {
      (this._domElement).value = value;
      return value;
    }

  };

  // SystemQut.Controls.Upload

  function Upload(domElement) {
    CodeBehind.call(this, (domElement == null) ? domElement = HtmlUtil.createElement('input', null, { type: 'file' }) : domElement);
    domElement.addEventListener('change', ss.bind('_selectionChanged$1', this), false);
  }

  var Upload$ = {
    _selectionChanged$1: function(args) {
      this.notifyPropertyChanged('Files');
    }
    ,
    get_files: function() {
      return (this._domElement).files;
    }

  };

  // SystemQut.Css.SimpleSelectorSeq

  function SimpleSelectorSeq(typeSelector, qualifiers) {
    Selector.call(this);
    this._typeSelector$1 = typeSelector;
    this._qualifiers$1 = [];

    if (ss.isValue(qualifiers)) {

      for (var i = 0; i < qualifiers.length; i++) {
        this._qualifiers$1.push(qualifiers[i]);
      }

    }

  }

  var SimpleSelectorSeq$ = {
    add: function(qualifier) {
      Assert.isTrue(ss.isValue(qualifier), 'TypeSelector.Add: qualifier must have a value.');
      this._qualifiers$1.push(qualifier);
      return this;
    }
    ,
    toString: function() {
      return ((ss.isValue(this._typeSelector$1)) ? '' : this._typeSelector$1.toString()) + this._qualifiers$1.join('');
    }

  };

  // SystemQut.Css.SelectorCombo

  function SelectorCombo(head, tail) {
    Selector.call(this);
    Assert.isTrue(ss.isValue(head), 'Selector.ctor: head may not be null.');
    this._head$1 = head;
    this._tail$1 = [];

    if (tail != null) {

      for (var i = 0; i <= tail.length; i++) {
        this._tail$1.push(tail[i]);
      }

    }

  }

  var SelectorCombo$ = {
    add: function(selector) {
      Assert.isTrue(ss.isValue(selector), 'SelectorCombo.Add: selector must have a value.');
      this._tail$1.push(selector);
      return this;
    }
    ,
    toString: function() {
      return this._head$1.toString() + this._tail$1.join('');
    }

  };

  // SystemQut.Css.SimpleSelector

  function SimpleSelector() {
    Selector.call(this);
  }

  var SimpleSelector$ = {

  };

  // SystemQut.Css.SelectorGroup

  function SelectorGroup(head, tail) {
    Selector.call(this);
    Assert.isTrue(ss.isValue(head), 'SelectorGroup.ctor: head may not be null.');
    this._head$1 = head;
    this._tail$1 = [];

    if (tail != null) {

      for (var i = 0; i < tail.length; i++) {
        this._tail$1.push(tail[i]);
      }

    }

  }

  var SelectorGroup$ = {
    add: function(tailItem) {
      Assert.isTrue(tailItem != null, 'SelectorGroup.Add: tailItem may not be null.');
      this._tail$1.push(tailItem);
    }
    ,
    toString: function() {
      var result = this._head$1.toString();

      if (this._tail$1 != null) {
        result += ',';
        result += this._tail$1.join(',');
      }

      return result;
    }

  };

  // SystemQut.Svg.SvgElement

  function SvgElement(domElement, tag, parent, attributes) {
    CodeBehind.call(this, (domElement == null) ? Svg.createElement(tag, null, attributes) : domElement);

    if (parent != null) {
      parent.appendContent(this);
    }

  }

  var SvgElement$ = {
    addGraphicalEventListener: function(eventType, eventListener, useCapture) {
      this._domElement.addEventListener(eventType, eventListener, useCapture);
    }
    ,
    removeGraphicalEventListener: function(eventType, eventListener, useCapture) {
      this._domElement.removeEventListener(eventType, eventListener, useCapture);
    }
    ,
    addElementEventListener: function(eventType, eventListener, useCapture) {
      this._domElement.addEventListener(eventType, eventListener, useCapture);
    }
    ,
    removeElementEventListener: function(eventType, eventListener, useCapture) {
      this._domElement.removeEventListener(eventType, eventListener, useCapture);
    }
    ,
    get_transform: function() {
      return this.getAttribute_$$$_1('transform');
    }
    ,
    set_transform: function(value) {
      this.setAttribute_$$$_1('transform', value);
      return value;
    }
    ,
    get_clipPath: function() {
      return this.getAttribute_$$$_1('clip-path');
    }
    ,
    set_clipPath: function(value) {
      this.setAttribute_$$$_1('clip-path', value);
      return value;
    }
    ,
    get_clipRule: function() {
      return this.getAttribute_$$$_1('clip-rule');
    }
    ,
    set_clipRule: function(value) {
      this.setAttribute_$$$_1('clip-rule', value);
      return value;
    }
    ,
    get_mask: function() {
      return this.getAttribute_$$$_1('mask');
    }
    ,
    set_mask: function(value) {
      this.setAttribute_$$$_1('mask', value);
      return value;
    }
    ,
    get_opacity: function() {
      return parseFloat(this.getAttribute_$$$_1('opacity'));
    }
    ,
    set_opacity: function(value) {
      this.setAttribute_$$$_1('opacity', value);
      return value;
    }
    ,
    get_enableBackground: function() {
      return this.getAttribute_$$$_1('enable-background');
    }
    ,
    set_enableBackground: function(value) {
      this.setAttribute_$$$_1('enable-background', value);
      return value;
    }
    ,
    get_filter: function() {
      return this.getAttribute_$$$_1('predicate');
    }
    ,
    set_filter: function(value) {
      this.setAttribute_$$$_1('predicate', value);
      return value;
    }
    ,
    get_floodColor: function() {
      return this.getAttribute_$$$_1('flood-color');
    }
    ,
    set_floodColor: function(value) {
      this.setAttribute_$$$_1('flood-color', value);
      return value;
    }
    ,
    get_floodOpacity: function() {
      return parseFloat(this.getAttribute_$$$_1('flood-opacity'));
    }
    ,
    set_floodOpacity: function(value) {
      this.setAttribute_$$$_1('flood-opacity', value.toString());
      return value;
    }
    ,
    get_lightingColor: function() {
      return this.getAttribute_$$$_1('lighting-color');
    }
    ,
    set_lightingColor: function(value) {
      this.setAttribute_$$$_1('lighting-color', value);
      return value;
    }
    ,
    get_stopColor: function() {
      return this.getAttribute_$$$_1('stop-color');
    }
    ,
    set_stopColor: function(value) {
      this.setAttribute_$$$_1('stop-color', value);
      return value;
    }
    ,
    get_stopOpacity: function() {
      return parseFloat(this.getAttribute_$$$_1('stop-opacity'));
    }
    ,
    set_stopOpacity: function(value) {
      this.setAttribute_$$$_1('stop-opacity', value.toString());
      return value;
    }
    ,
    get_pointerEvents: function() {
      return this.getAttribute_$$$_1('pointer-events');
    }
    ,
    set_pointerEvents: function(value) {
      this.setAttribute_$$$_1('pointer-events', value);
      return value;
    }
    ,
    get_colorInterpolation: function() {
      return this.getAttribute_$$$_1('color-interpolation');
    }
    ,
    set_colorInterpolation: function(value) {
      this.setAttribute_$$$_1('color-interpolation', value);
      return value;
    }
    ,
    get_colorInterpolationFilters: function() {
      return this.getAttribute_$$$_1('color-interpolation-filters');
    }
    ,
    set_colorInterpolationFilters: function(value) {
      this.setAttribute_$$$_1('color-interpolation-filters', value);
      return value;
    }
    ,
    get_colorProfile: function() {
      return this.getAttribute_$$$_1('color-profile');
    }
    ,
    set_colorProfile: function(value) {
      this.setAttribute_$$$_1('color-profile', value);
      return value;
    }
    ,
    get_colorRendering: function() {
      return this.getAttribute_$$$_1('color-rendering');
    }
    ,
    set_colorRendering: function(value) {
      this.setAttribute_$$$_1('color-rendering', value);
      return value;
    }
    ,
    get_fill: function() {
      return this.getAttribute_$$$_1('fill');
    }
    ,
    set_fill: function(value) {
      this.setAttribute_$$$_1('fill', value);
      return value;
    }
    ,
    get_fillOpacity: function() {
      return parseFloat(this.getAttribute_$$$_1('fill-opacity'));
    }
    ,
    set_fillOpacity: function(value) {
      this.setAttribute_$$$_1('fill-opacity', value.toString());
      return value;
    }
    ,
    get_fillRule: function() {
      return this.getAttribute_$$$_1('fill-rule');
    }
    ,
    set_fillRule: function(value) {
      this.setAttribute_$$$_1('fill-rule', value);
      return value;
    }
    ,
    get_imageRendering: function() {
      return this.getAttribute_$$$_1('image-rendering');
    }
    ,
    set_imageRendering: function(value) {
      this.setAttribute_$$$_1('image-rendering', value);
      return value;
    }
    ,
    get_marker: function() {
      return this.getAttribute_$$$_1('marker');
    }
    ,
    set_marker: function(value) {
      this.setAttribute_$$$_1('marker', value);
      return value;
    }
    ,
    get_markerEnd: function() {
      return this.getAttribute_$$$_1('marker-end');
    }
    ,
    set_markerEnd: function(value) {
      this.setAttribute_$$$_1('marker-end', value);
      return value;
    }
    ,
    get_markerMid: function() {
      return this.getAttribute_$$$_1('marker-mid');
    }
    ,
    set_markerMid: function(value) {
      this.setAttribute_$$$_1('marker-mid', value);
      return value;
    }
    ,
    get_markerStart: function() {
      return this.getAttribute_$$$_1('marker-start');
    }
    ,
    set_markerStart: function(value) {
      this.setAttribute_$$$_1('marker-start', value);
      return value;
    }
    ,
    get_shapeRendering: function() {
      return this.getAttribute_$$$_1('shape-rendering');
    }
    ,
    set_shapeRendering: function(value) {
      this.setAttribute_$$$_1('shape-rendering', value);
      return value;
    }
    ,
    get_stroke: function() {
      return this.getAttribute_$$$_1('stroke');
    }
    ,
    set_stroke: function(value) {
      this.setAttribute_$$$_1('stroke', value);
      return value;
    }
    ,
    get_strokeDashArray: function() {
      var dashString = this.getAttribute_$$$_1('stroke-dasharray');
      var dashArray = dashString.split(new RegExp('[ ,]'));
      return dashArray.map(function(s) {
        return parseFloat(s);
      });
    }
    ,
    set_strokeDashArray: function(value) {
      this.setAttribute_$$$_1('stroke-dasharray', value.join(','));
      return value;
    }
    ,
    get_strokeDashoffset: function() {
      return parseFloat(this.getAttribute_$$$_1('stroke-dashoffset'));
    }
    ,
    set_strokeDashoffset: function(value) {
      this.setAttribute_$$$_1('stroke-dashoffset', value);
      return value;
    }
    ,
    get_strokeLinecap: function() {
      return this.getAttribute_$$$_1('stroke-linecap');
    }
    ,
    set_strokeLinecap: function(value) {
      this.setAttribute_$$$_1('stroke-linecap', value);
      return value;
    }
    ,
    get_strokeLinejoin: function() {
      return this.getAttribute_$$$_1('stroke-linejoin');
    }
    ,
    set_strokeLinejoin: function(value) {
      this.setAttribute_$$$_1('stroke-linejoin', value);
      return value;
    }
    ,
    get_strokeMiterlimit: function() {
      return parseFloat(this.getAttribute_$$$_1('stroke-miterlimit'));
    }
    ,
    set_strokeMiterlimit: function(value) {
      this.setAttribute_$$$_1('stroke-miterlimit', value);
      return value;
    }
    ,
    get_strokeOpacity: function() {
      return parseFloat(this.getAttribute_$$$_1('stroke-opacity'));
    }
    ,
    set_strokeOpacity: function(value) {
      this.setAttribute_$$$_1('stroke-opacity', value);
      return value;
    }
    ,
    get_strokeWidth: function() {
      return parseFloat(this.getAttribute_$$$_1('stroke-width'));
    }
    ,
    set_strokeWidth: function(value) {
      this.setAttribute_$$$_1('stroke-width', value);
      return value;
    }
    ,
    get_textRendering: function() {
      return this.getAttribute_$$$_1('text-rendering');
    }
    ,
    set_textRendering: function(value) {
      this.setAttribute_$$$_1('text-rendering', value);
      return value;
    }
    ,
    get_alignmentBaseline: function() {
      return this.getAttribute_$$$_1('alignment-baseline');
    }
    ,
    set_alignmentBaseline: function(value) {
      this.setAttribute_$$$_1('alignment-baseline', value);
      return value;
    }
    ,
    get_baselineShift: function() {
      return this.getAttribute_$$$_1('baseline-shift');
    }
    ,
    set_baselineShift: function(value) {
      this.setAttribute_$$$_1('baseline-shift', value);
      return value;
    }
    ,
    get_dominantBaseline: function() {
      return this.getAttribute_$$$_1('dominant-baseline');
    }
    ,
    set_dominantBaseline: function(value) {
      this.setAttribute_$$$_1('dominant-baseline', value);
      return value;
    }
    ,
    get_glyphOrientationHorizontal: function() {
      return this.getAttribute_$$$_1('glyph-orientation-horizontal');
    }
    ,
    set_glyphOrientationHorizontal: function(value) {
      this.setAttribute_$$$_1('glyph-orientation-horizontal', value);
      return value;
    }
    ,
    get_glyphOrientationVertical: function() {
      return this.getAttribute_$$$_1('glyph-orientation-vertical');
    }
    ,
    set_glyphOrientationVertical: function(value) {
      this.setAttribute_$$$_1('glyph-orientation-vertical', value);
      return value;
    }
    ,
    get_kerning: function() {
      return this.getAttribute_$$$_1('kerning');
    }
    ,
    set_kerning: function(value) {
      this.setAttribute_$$$_1('kerning', value);
      return value;
    }
    ,
    get_textAnchor: function() {
      return this.getAttribute_$$$_1('text-anchor');
    }
    ,
    set_textAnchor: function(value) {
      this.setAttribute_$$$_1('text-anchor', value);
      return value;
    }
    ,
    get_writingMode: function() {
      return this.getAttribute_$$$_1('writing-mode');
    }
    ,
    set_writingMode: function(value) {
      this.setAttribute_$$$_1('writing-mode', value);
      return value;
    }
    ,
    get_font: function() {
      return this.getAttribute_$$$_1('font');
    }
    ,
    set_font: function(value) {
      this.setAttribute_$$$_1('font', value);
      return value;
    }
    ,
    get_fontFamily: function() {
      return this.getAttribute_$$$_1('font-family');
    }
    ,
    set_fontFamily: function(value) {
      this.setAttribute_$$$_1('font-family', value);
      return value;
    }
    ,
    get_fontSize: function() {
      return this.getAttribute_$$$_1('font-size');
    }
    ,
    set_fontSize: function(value) {
      this.setAttribute_$$$_1('font-size', value);
      return value;
    }
    ,
    get_fontStyle: function() {
      return this.getAttribute_$$$_1('font-style');
    }
    ,
    set_fontStyle: function(value) {
      this.setAttribute_$$$_1('font-style', value);
      return value;
    }
    ,
    get_fontVariant: function() {
      return this.getAttribute_$$$_1('font-variant');
    }
    ,
    set_fontVariant: function(value) {
      this.setAttribute_$$$_1('font-variant', value);
      return value;
    }
    ,
    get_fontWeight: function() {
      return this.getAttribute_$$$_1('font-weight');
    }
    ,
    set_fontWeight: function(value) {
      this.setAttribute_$$$_1('font-weight', value);
      return value;
    }
    ,
    get_direction: function() {
      return this.getAttribute_$$$_1('direction');
    }
    ,
    set_direction: function(value) {
      this.setAttribute_$$$_1('direction', value);
      return value;
    }
    ,
    get_letterSpacing: function() {
      return this.getAttribute_$$$_1('letter-spacing');
    }
    ,
    set_letterSpacing: function(value) {
      this.setAttribute_$$$_1('letter-spacing', value);
      return value;
    }
    ,
    get_textDecoration: function() {
      return this.getAttribute_$$$_1('text-decoration');
    }
    ,
    set_textDecoration: function(value) {
      this.setAttribute_$$$_1('text-decoration', value);
      return value;
    }
    ,
    get_wordSpacing: function() {
      return this.getAttribute_$$$_1('word-spacing');
    }
    ,
    set_wordSpacing: function(value) {
      this.setAttribute_$$$_1('word-spacing', value);
      return value;
    }
    ,
    get_clip: function() {
      return this.getAttribute_$$$_1('clip');
    }
    ,
    set_clip: function(value) {
      this.setAttribute_$$$_1('clip', value);
      return value;
    }
    ,
    get_color: function() {
      return this.getAttribute_$$$_1('color');
    }
    ,
    set_color: function(value) {
      this.setAttribute_$$$_1('color', value);
      return value;
    }
    ,
    get_cursor: function() {
      return this.getAttribute_$$$_1('cursor');
    }
    ,
    set_cursor: function(value) {
      this.setAttribute_$$$_1('cursor', value);
      return value;
    }
    ,
    get_display: function() {
      return this.getAttribute_$$$_1('display');
    }
    ,
    set_display: function(value) {
      this.setAttribute_$$$_1('display', value);
      return value;
    }
    ,
    get_overflow: function() {
      return this.getAttribute_$$$_1('overflow');
    }
    ,
    set_overflow: function(value) {
      this.setAttribute_$$$_1('overflow', value);
      return value;
    }
    ,
    get_visibility: function() {
      return this.getAttribute_$$$_1('visibility');
    }
    ,
    set_visibility: function(value) {
      this.setAttribute_$$$_1('visibility', value);
      return value;
    }
    ,
    get_nearestViewportElement: function() {
      return ((this._domElement).nearestViewportElement()).__codebehind__;
    }
    ,
    get_farthestViewportElement: function() {
      return ((this._domElement).farthestViewportElement()).__codebehind__;
    }
    ,
    get_boundingBox: function() {
      return (this._domElement).getBBox();
    }
    ,
    get_CTM: function() {
      return (this._domElement).getCTM();
    }
    ,
    get_screenCTM: function() {
      return (this._domElement).getScreenCTM();
    }
    ,
    getTransformToElement: function(element) {
      return (element).getTransformToElement(element);
    }
    ,
    get_ownerSvgElement: function() {
      return ((this._domElement).ownerSvgElement).__codebehind__;
    }
    ,
    get_viewportElement: function() {
      return ((this._domElement).viewportElement).__codebehind__;
    }

  };

  // SystemQut.ArgumentException

  function ArgumentException(message, paramName) {
    this._paramName$2 = null;
    Error.call(this, message);

    if (arguments.length === 1) {
      return;
    }

    this._paramName$2 = paramName;
  }

  var ArgumentException$ = {
    get_paramName: function() {
      return this._paramName$2;
    }

  };

  // SystemQut.ArgumentNullException

  function ArgumentNullException(p) {
    Error.call(this, p);
  }

  var ArgumentNullException$ = {

  };

  // SystemQut.ArgumentOutOfRangeException

  function ArgumentOutOfRangeException(message, propertyName) {
    this._propertyName$2 = null;
    Error.call(this, message);

    if (arguments.length < 2) {
      propertyName = null;
    }

    this._propertyName$2 = propertyName;
  }

  var ArgumentOutOfRangeException$ = {

  };

  // SystemQut.FormatException

  function FormatException(message) {
    Error.call(this, message);
  }

  var FormatException$ = {

  };

  // SystemQut.InvalidDataException

  function InvalidDataException(message) {
    Error.call(this, message);
  }

  var InvalidDataException$ = {

  };

  // SystemQut.InvalidOperationException

  function InvalidOperationException(message) {
    Error.call(this, (!arguments.length) ? 'Invalid operation.' : message);
  }

  var InvalidOperationException$ = {

  };

  // SystemQut.OutOfMemoryException

  function OutOfMemoryException(message, innerException) {
    Error.call(this, message);

    if (arguments.length > 1) {
      this.innerException = innerException;
    }

  }

  var OutOfMemoryException$ = {

  };

  // SystemQut.XmlException

  function XmlException(p) {
    Error.call(this, p);
  }

  var XmlException$ = {

  };

  // SystemQut.NotImplementedException

  function NotImplementedException() {
    Error.call(this, 'Not implemented.');
  }

  var NotImplementedException$ = {

  };

  // SystemQut.Xml.PlaceHolder

  function PlaceHolder(id, attributeValuePairs, children) {
    Element.call(this, 'placeholder', id, attributeValuePairs, children);
  }

  var PlaceHolder$ = {
    toString: function() {
      var sb = new ss.StringBuilder();

      for (var i = 0; i < this.children.length; i++) {
        sb.append(this.children[i].toString());
      }

      return sb.toString();
    }

  };

  // SystemQut.ComponentModel.PropertyChangedEventArgs

  function PropertyChangedEventArgs(propertyNames) {
    ss.EventArgs.call(this);
    this._propertyNames$2 = propertyNames.split(',');
  }

  var PropertyChangedEventArgs$ = {
    get_propertyNames: function() {
      return this._propertyNames$2;
    }
    ,
    includes: function(propertyName) {
      return this._propertyNames$2[0] === propertyName || (this._propertyNames$2.indexOf(propertyName) >= 0);
    }

  };

  // SystemQut.Controls.DataGridNumericCell

  function DataGridNumericCell(format) {
    DataGridCell.call(this);
    this._format$2 = format;
  }

  var DataGridNumericCell$ = {
    get_value: function() {
      return ss.number(this._domElement.textContent);
    }
    ,
    set_value: function(value) {
      this._domElement.textContent = ss.format(this._format$2, value);
      return value;
    }
    ,
    get_cssClass: function() {
      return 'SystemQUT_NumericCell';
    }

  };

  // SystemQut.Controls.DataGridNumericColumn

  function DataGridNumericColumn(domElement) {
    this._format$2 = null;
    DataGridColumnDefinition.call(this, (domElement != null) ? domElement : domElement = document.createElement('td'));
  }

  var DataGridNumericColumn$ = {
    get_format: function() {

      if (this._format$2 == null) {
        this._format$2 = this.getAttribute_$$$_1('data-format');

        if (!ss.isValue(this._format$2)) {
          this._format$2 = '{0}';
        }

      }

      return this._format$2;
    }
    ,
    set_format: function(value) {

      if (this._format$2 === value) {
        return;
      }

      this._format$2 = value;
      this.setAttribute_$$$_1('data-format', value);
      return value;
    }
    ,
    createCell: function(item, sourcePropertyName, dataBindingMode) {
      var text = new DataGridNumericCell(this.get_format());
      this._binding$2 = text.bind(sourcePropertyName, 'Value', 1);
      text.set_dataContext(item);
      return text;
    }
    ,
    orderBy: function(x, y) {
      var xValue = this._binding$2.getSourceValue(x);
      var yValue = this._binding$2.getSourceValue(y);
      return (xValue < yValue) ? -1 : (xValue === yValue) ? 0 : 1;
    }

  };

  // SystemQut.Controls.SvgButton

  function SvgButton(element, xMax, yMax) {
    this.xMax = 0;
    this.yMax = 0;
    Button.call(this, element);
    this._domElement.classList.add(SvgButton.get_csS_CLASS());
    this.xMax = xMax;
    this.yMax = yMax;
    this.drawing = new SvgSvg(null, null);
    this.drawing._domElement.style.display = 'inline-block';
    this.drawing.set_preserveAspectRatio(PreserveAspectRatioType.get_xMidYMid());
    this.drawing.set_viewBox(new SvgRect(0, 0, xMax, yMax));
    this.drawing.addElementTo(this._domElement);
    var mid = yMax / 2;
    this.group = new SvgGroup(this.drawing, null);
    this.group.setAttribute_$$$_1('style', 'stroke-linecap: round; stroke-linejoin: round');
    this.renderContent();
  }

  SvgButton.get_csS_CLASS = function() {
    return 'SystemQUT_SvgButton';
  };

  var SvgButton$ = {

  };

  // SystemQut.Controls.DataGridCheckBoxCell

  function DataGridCheckBoxCell() {
    DataGridCell.call(this);
    this._checkBox$2 = new CheckBox(null);
    this._checkBox$2.addElementTo(this._domElement);
  }

  var DataGridCheckBoxCell$ = {
    get_checkBox: function() {
      return this._checkBox$2;
    }
    ,
    get_cssClass: function() {
      return 'SystemQUT_CheckBoxCell';
    }

  };

  // SystemQut.Controls.DataGridTextCell

  function DataGridTextCell() {
    DataGridCell.call(this);
  }

  var DataGridTextCell$ = {
    get_text: function() {
      return this._domElement.textContent;
    }
    ,
    set_text: function(value) {
      this._domElement.textContent = value;
      return value;
    }
    ,
    get_cssClass: function() {
      return 'SystemQUT_TextCell';
    }

  };

  // SystemQut.Controls.DataGridCheckBoxColumn

  function DataGridCheckBoxColumn(domElement) {
    DataGridColumnDefinition.call(this, (domElement != null) ? domElement : domElement = document.createElement('td'));
  }

  var DataGridCheckBoxColumn$ = {
    createCell: function(item, sourcePropertyName, dataBindingMode) {
      var cell = new DataGridCheckBoxCell();
      this._binding$2 = cell.get_checkBox().bind(sourcePropertyName, 'IsChecked', dataBindingMode);
      cell.get_checkBox().set_dataContext(item);
      return cell;
    }
    ,
    orderBy: function(x, y) {
      var xValue = this._binding$2.getSourceValue(x);
      var yValue = this._binding$2.getSourceValue(y);
      return (xValue === yValue) ? 0 : (xValue) ? 1 : -1;
    }

  };

  // SystemQut.Controls.DataGridTextColumn

  function DataGridTextColumn(domElement) {
    DataGridColumnDefinition.call(this, (domElement != null) ? domElement : domElement = document.createElement('td'));
  }

  var DataGridTextColumn$ = {
    createCell: function(item, sourcePropertyName, dataBindingMode) {
      var text = new DataGridTextCell();
      this._binding$2 = text.bind(sourcePropertyName, 'Text', 1);
      text.set_dataContext(item);
      return text;
    }
    ,
    orderBy: function(x, y) {
      var xValue = this._binding$2.getSourceValue(x);
      var yValue = this._binding$2.getSourceValue(y);
      return ss.compareStrings(xValue, yValue, true);
    }

  };

  // SystemQut.Controls.ElementEventArgs

  function ElementEventArgs(elementEvent) {
    ss.EventArgs.call(this);
    this._elementEvent$2 = elementEvent;
  }

  var ElementEventArgs$ = {
    get_elementEvent: function() {
      return this._elementEvent$2;
    }

  };

  // SystemQut.Controls.Control

  function Control() {
    Object.call(this);
  }

  Control.hasCodeBehind = function(element) {
    return element.__codebehind__;
  };

  Control.getCodeBehind = function(element) {
    return element.__codebehind__;
  };

  Control.loadControlTemplate = function(url, onSuccess, onError) {
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onreadystatechange = function() {

      if (req.readyState === 4) {

        if (req.status !== 200) {

          try {
            throw new Error(ss.format('HTTP request failed, status = {0}. Response text = {1}', req.status, req.responseText));
          }
          catch (ex) {
            onError(ex);
          }

        }
        else {

          try {
            var startExpr = new RegExp('<body[^>]*>');
            var endExpr = new RegExp('<\\/body>');
            var startMatch = startExpr.exec(req.responseText);
            var endMatch = endExpr.exec(req.responseText);
            var startLen = startMatch[0].length;
            var innerHTML = req.responseText.substring(startMatch.index + startLen, endMatch.index);
            var fragment = Control.parseControl(innerHTML);
            onSuccess(fragment);
          }
          catch (e) {
            onError(e);
          }

        }

      }

    };
    req.send();
  };

  Control.parseControl = function(html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    var fragment = document.createDocumentFragment();
    while (div.firstChild) {
      fragment.appendChild(div.firstChild);
    }
    CodeBehind.bindAllControls(fragment.childNodes);
    return fragment;
  };

  var Control$ = {

  };

  // SystemQut.Css.NegationQualfier

  function NegationQualfier(negationArg) {
    SimpleSelector.call(this);
    Assert.isTrue(ss.isValue(negationArg), 'NegationQualfier.ctor: negatedArg must have a value.');
    Assert.isFalse(ss.canCast(negationArg, NegationQualfier), 'NegationQualfier.ctor: the negated selector may not be a Negation.');
    this._negationArg$2 = negationArg;
  }

  var NegationQualfier$ = {
    toString: function() {
      return ss.format(':NOT({0})', this._negationArg$2);
    }

  };

  // SystemQut.Css.CssQualifier

  function CssQualifier() {
    SimpleSelector.call(this);
  }

  var CssQualifier$ = {

  };

  // SystemQut.Css.TypeSelector

  function TypeSelector(nameSpacePrefix, elementName) {
    SimpleSelector.call(this);
    Assert.isFalse(ss.whitespace(elementName), 'TypeSelector.ctor: elementName may not be null');
    this._elementName$2 = elementName;
    this._nameSpacePrefix$2 = nameSpacePrefix;
  }

  var TypeSelector$ = {
    toString: function() {
      return ((this._nameSpacePrefix$2 == null) ? '' : this._nameSpacePrefix$2 + '|') + this._elementName$2;
    }

  };

  // SystemQut.Svg.SvgDrawingElement

  function SvgDrawingElement(tag, parent, attributes) {
    SvgElement.call(this, null, tag, parent, attributes);
  }

  var SvgDrawingElement$ = {

  };

  // SystemQut.Svg.SvgContainer

  function SvgContainer(tag, parent, attributes) {
    this._content = [];
    SvgElement.call(this, null, tag, parent, attributes);
  }

  var SvgContainer$ = {
    appendContent: function(child) {
      this._domElement.appendChild(child._domElement);
      this._content.push(child);
    }
    ,
    removeContent: function(child) {
      this._domElement.removeChild(child._domElement);
      ss.remove(this._content, child);
    }
    ,
    get_count: function() {
      return this._content.length;
    }
    ,
    getEnumerator: function() {
      return ss.enumerate(this._content);
    }
    ,
    get_item: function(index) {
      return this._content[index];
    }
  };

  // SystemQut.Controls.GotoFirstRecordButton

  function GotoFirstRecordButton(domElement) {
    SvgButton.call(this, domElement, 15, 12);
  }

  var GotoFirstRecordButton$ = {
    renderContent: function() {
      var barThickness = 3;
      var arrowThickness = 3;
      var arrowHeadThickness = 4;
      var arrowStartX = barThickness + 1;
      var p0 = RecordButtonUtil._bar(this.yMax, barThickness);
      var z0 = new SvgPolyLine(this.group, p0, null);
      var p1 = RecordButtonUtil._arrow(this.xMax, this.yMax, arrowStartX, arrowHeadThickness, arrowThickness);
      var z1 = new SvgPolyLine(this.group, p1, null);
    }

  };

  // SystemQut.Controls.GotoLastRecordButton

  function GotoLastRecordButton(domElement) {
    SvgButton.call(this, domElement, 15, 12);
  }

  var GotoLastRecordButton$ = {
    renderContent: function() {
      var barThickness = 3;
      var arrowThickness = 3;
      var arrowHeadThickness = 4;
      var arrowStartX = barThickness + 1;
      var p0 = RecordButtonUtil._bar(this.yMax, barThickness);

      var $enum1 = ss.enumerate(p0);
      while ($enum1.moveNext()) {
        var p = $enum1.get_current();
        p.set_x(this.xMax - p.get_x());
      }

      var z0 = new SvgPolyLine(this.group, p0, null);
      var p1 = RecordButtonUtil._arrow(this.xMax, this.yMax, arrowStartX, arrowHeadThickness, arrowThickness);

      var $enum2 = ss.enumerate(p1);
      while ($enum2.moveNext()) {
        var p = $enum2.get_current();
        p.set_x(this.xMax - p.get_x());
      }

      var z1 = new SvgPolyLine(this.group, p1, null);
    }

  };

  // SystemQut.Controls.GotoNextRecordButton

  function GotoNextRecordButton(domElement) {
    SvgButton.call(this, domElement, 15, 12);
  }

  var GotoNextRecordButton$ = {
    renderContent: function() {
      var arrowThickness = 3;
      var arrowHeadThickness = 4;
      var arrowStartX = 0;
      var barThickness = 3;
      var p1 = RecordButtonUtil._arrow(this.xMax - barThickness - 1, this.yMax, arrowStartX, arrowHeadThickness, arrowThickness);

      var $enum1 = ss.enumerate(p1);
      while ($enum1.moveNext()) {
        var p = $enum1.get_current();
        p.set_x(this.xMax - p.get_x() - (barThickness + 1) / 2);
      }

      var z1 = new SvgPolyLine(this.group, p1, null);
    }

  };

  // SystemQut.Controls.GotoPreviousRecordButton

  function GotoPreviousRecordButton(domElement) {
    SvgButton.call(this, domElement, 15, 12);
  }

  var GotoPreviousRecordButton$ = {
    renderContent: function() {
      var arrowThickness = 3;
      var arrowHeadThickness = 4;
      var arrowStartX = 0;
      var barThickness = 3;
      var p1 = RecordButtonUtil._arrow(this.xMax - barThickness - 1, this.yMax, arrowStartX, arrowHeadThickness, arrowThickness);

      var $enum1 = ss.enumerate(p1);
      while ($enum1.moveNext()) {
        var p = $enum1.get_current();
        p.set_x(p.get_x() + (barThickness + 1) / 2);
      }

      var z1 = new SvgPolyLine(this.group, p1, null);
    }

  };

  // SystemQut.Css.ClassQualifier

  function ClassQualifier(name) {
    CssQualifier.call(this);
    Assert.isFalse(ss.whitespace(name), 'ClassQualifier.ctor: name may not be null or blank/');
    this._name$3 = name;
  }

  var ClassQualifier$ = {
    toString: function() {
      return '.' + this._name$3;
    }

  };

  // SystemQut.Css.IdentQualifier

  function IdentQualifier(name) {
    CssQualifier.call(this);
    Assert.isFalse(ss.whitespace(name), 'IdentQualifier.ctor: name may not be null or blank/');
    this._name$3 = name;
  }

  var IdentQualifier$ = {
    toString: function() {
      return '#' + this._name$3;
    }

  };

  // SystemQut.Svg.SvgPolygon

  function SvgPolygon(parent, points, attributes) {
    this._xMin$3 = 0;
    this._xMax$3 = 0;
    this._yMin$3 = 0;
    this._yMax$3 = 0;
    SvgDrawingElement.call(this, 'polygon', parent, attributes);
    this.set_points(points);
  }

  var SvgPolygon$ = {
    get_points: function() {
      return this._points$3;
    }
    ,
    set_points: function(value) {
      this._points$3 = value;
      this._refresh$3();
      this.notifyPropertyChanged('Points');
      return value;
    }
    ,
    _refresh$3: function() {

      if (!ss.isValue(this._points$3) || !this._points$3.length) {
        this._xMin$3 = this._xMax$3 = this._yMin$3 = this._yMax$3 = undefined;
        this.setAttribute_$$$_1('points', '');
        return;
      }

      this._xMin$3 = this._xMax$3 = this._points$3[0].get_x();
      this._yMin$3 = this._yMax$3 = this._points$3[0].get_y();
      var sb = new ss.StringBuilder(this._points$3[0].toString());

      for (var i = 1; i < this._points$3.length; i++) {
        var p = this._points$3[i];

        if (p.get_x() < this._xMin$3) {
          this._xMin$3 = p.get_x();
        }

        if (p.get_y() < this._yMin$3) {
          this._yMin$3 = p.get_y();
        }

        if (p.get_x() > this._xMax$3) {
          this._xMax$3 = p.get_x();
        }

        if (p.get_y() > this._yMax$3) {
          this._yMax$3 = p.get_y();
        }

        sb.append(' ');
        sb.append(p);
      }

      this.setAttribute_$$$_1('points', sb.toString());
    }
    ,
    get_width: function() {
      return this._xMax$3 - this._xMin$3;
    }
    ,
    set_width: function(value) {
      throw new Error('Not supported.');
      return value;
    }
    ,
    get_height: function() {
      return this._yMax$3 - this._yMin$3;
    }
    ,
    set_height: function(value) {
      throw new Error('Not supported.');
      return value;
    }

  };

  // SystemQut.Svg.SvgEllipse

  function SvgEllipse(parent, cx, cy, radiusX, radiusY, attributes) {
    SvgDrawingElement.call(this, 'ellipse', parent, attributes);
    this.set_CX(cx);
    this.set_CY(cy);
    this.set_radiusX(radiusX);
    this.set_radiusY(radiusY);
  }

  var SvgEllipse$ = {
    get_CX: function() {
      return this.getAttribute_$$$_1('cx');
    }
    ,
    set_CX: function(value) {
      this.setAttribute_$$$_1('cx', value);
      return value;
    }
    ,
    get_CY: function() {
      return this.getAttribute_$$$_1('cy');
    }
    ,
    set_CY: function(value) {
      this.setAttribute_$$$_1('cy', value);
      return value;
    }
    ,
    get_radiusX: function() {
      return this.getAttribute_$$$_1('rx');
    }
    ,
    set_radiusX: function(value) {
      this.setAttribute_$$$_1('rx', value);
      return value;
    }
    ,
    get_radiusY: function() {
      return this.getAttribute_$$$_1('ry');
    }
    ,
    set_radiusY: function(value) {
      this.setAttribute_$$$_1('ry', value);
      return value;
    }
    ,
    get_height: function() {
      return 2 * this.getAttribute_$$$_1('ry');
    }
    ,
    set_height: function(value) {
      this.setAttribute_$$$_1('ry', value / 2);
      return value;
    }
    ,
    get_width: function() {
      return 2 * this.getAttribute_$$$_1('rx');
    }
    ,
    set_width: function(value) {
      this.setAttribute_$$$_1('rx', value / 2);
      return value;
    }

  };

  // SystemQut.Svg.SvgCircle

  function SvgCircle(parent, cx, cy, radius, attributes) {
    SvgDrawingElement.call(this, 'circle', parent, attributes);
    this.set_CX(cx);
    this.set_CY(cy);
    this.set_radius(radius);
  }

  var SvgCircle$ = {
    get_CX: function() {
      return this.getAttribute_$$$_1('cx');
    }
    ,
    set_CX: function(value) {
      this.setAttribute_$$$_1('cx', value);
      return value;
    }
    ,
    get_CY: function() {
      return this.getAttribute_$$$_1('cy');
    }
    ,
    set_CY: function(value) {
      this.setAttribute_$$$_1('cy', value);
      return value;
    }
    ,
    get_radius: function() {
      return this.getAttribute_$$$_1('r');
    }
    ,
    set_radius: function(value) {
      this.setAttribute_$$$_1('r', value);
      return value;
    }
    ,
    get_height: function() {
      return 2 * this.getAttribute_$$$_1('r');
    }
    ,
    set_height: function(value) {
      this.setAttribute_$$$_1('r', value / 2);
      return value;
    }
    ,
    get_width: function() {
      return 2 * this.getAttribute_$$$_1('r');
    }
    ,
    set_width: function(value) {
      this.setAttribute_$$$_1('r', value / 2);
      return value;
    }

  };

  // SystemQut.Svg.SvgPolyLine

  function SvgPolyLine(parent, points, attributes) {
    this._xMin$3 = 0;
    this._xMax$3 = 0;
    this._yMin$3 = 0;
    this._yMax$3 = 0;
    SvgDrawingElement.call(this, 'polyline', parent, attributes);
    this.set_points(points);
  }

  var SvgPolyLine$ = {
    get_points: function() {
      return this._points$3;
    }
    ,
    set_points: function(value) {
      this._points$3 = value;
      this._refresh$3();
      this.notifyPropertyChanged('Points');
      return value;
    }
    ,
    _refresh$3: function() {

      if (!ss.isValue(this._points$3) || !this._points$3.length) {
        this._xMin$3 = this._xMax$3 = this._yMin$3 = this._yMax$3 = undefined;
        this.setAttribute_$$$_1('points', '');
        return;
      }

      this._xMin$3 = this._xMax$3 = this._points$3[0].get_x();
      this._yMin$3 = this._yMax$3 = this._points$3[0].get_y();
      var sb = new ss.StringBuilder(this._points$3[0].toString());

      for (var i = 1; i < this._points$3.length; i++) {
        var p = this._points$3[i];

        if (p.get_x() < this._xMin$3) {
          this._xMin$3 = p.get_x();
        }

        if (p.get_y() < this._yMin$3) {
          this._yMin$3 = p.get_y();
        }

        if (p.get_x() > this._xMax$3) {
          this._xMax$3 = p.get_x();
        }

        if (p.get_y() > this._yMax$3) {
          this._yMax$3 = p.get_y();
        }

        sb.append(' ');
        sb.append(p);
      }

      this.setAttribute_$$$_1('points', sb.toString());
    }
    ,
    get_width: function() {
      return this._xMax$3 - this._xMin$3;
    }
    ,
    set_width: function(value) {
      throw new Error('Not supported.');
      return value;
    }
    ,
    get_height: function() {
      return this._yMax$3 - this._yMin$3;
    }
    ,
    set_height: function(value) {
      throw new Error('Not supported.');
      return value;
    }

  };

  // SystemQut.Svg.SvgLine

  function SvgLine(parent, x1, y1, x2, y2, attributes) {
    SvgDrawingElement.call(this, 'line', parent, attributes);
    this.set_x1(x1);
    this.set_y1(y1);
    this.set_x2(x2);
    this.set_y2(y2);
  }

  var SvgLine$ = {
    get_x1: function() {
      return parseFloat(this.getAttribute_$$$_1('x1'));
    }
    ,
    set_x1: function(value) {
      this.setAttribute_$$$_1('x1', value);
      return value;
    }
    ,
    get_x2: function() {
      return parseFloat(this.getAttribute_$$$_1('x2'));
    }
    ,
    set_x2: function(value) {
      this.setAttribute_$$$_1('x2', value);
      return value;
    }
    ,
    get_y1: function() {
      return parseFloat(this.getAttribute_$$$_1('y1'));
    }
    ,
    set_y1: function(value) {
      this.setAttribute_$$$_1('y1', value);
      return value;
    }
    ,
    get_y2: function() {
      return parseFloat(this.getAttribute_$$$_1('y2'));
    }
    ,
    set_y2: function(value) {
      this.setAttribute_$$$_1('y2', value);
      return value;
    }
    ,
    get_width: function() {
      return Math.abs(this.get_x2() - this.get_x1());
    }
    ,
    set_width: function(value) {
      throw new Error('Not supported.');
      return value;
    }
    ,
    get_height: function() {
      return Math.abs(this.get_y2() - this.get_y1());
    }
    ,
    set_height: function(value) {
      throw new Error('Not supported.');
      return value;
    }

  };

  // SystemQut.Svg.SvgText

  function SvgText(parent, attributes) {
    SvgDrawingElement.call(this, 'text', parent, attributes);
  }

  var SvgText$ = {
    get_width: function() {
      return this.get_boundingBox().width;
    }
    ,
    set_width: function(value) {
      throw new Error('Not implemented');
      return value;
    }
    ,
    get_height: function() {
      return this.get_boundingBox().height;
    }
    ,
    set_height: function(value) {
      throw new Error('Not implemented');
      return value;
    }
    ,
    get_x: function() {
      return this.getAttribute_$$$_1('x');
    }
    ,
    set_x: function(value) {
      this.setAttribute_$$$_1('x', value);
      return value;
    }
    ,
    get_y: function() {
      return this.getAttribute_$$$_1('y');
    }
    ,
    set_y: function(value) {
      this.setAttribute_$$$_1('y', value);
      return value;
    }
    ,
    get_DX: function() {
      return this.getAttribute_$$$_1('dx');
    }
    ,
    set_DX: function(value) {
      this.setAttribute_$$$_1('dx', value);
      return value;
    }
    ,
    get_DY: function() {
      return this.getAttribute_$$$_1('dy');
    }
    ,
    set_DY: function(value) {
      this.setAttribute_$$$_1('dy', value);
      return value;
    }
    ,
    get_text: function() {
      var firstChild = this._domElement.firstChild;
      return (firstChild == null) ? '' : firstChild.textContent;
    }
    ,
    set_text: function(value) {
      var firstChild = this._domElement.firstChild;

      if (firstChild == null) {
        this._domElement.appendChild(document.createTextNode(value));
      }
      else {
        firstChild.textContent = value;
      }

      return value;
    }

  };

  // SystemQut.Svg.SvgSvg

  function SvgSvg(parent, attributes) {
    SvgContainer.call(this, 'svg', parent, attributes);
  }

  var SvgSvg$ = {
    get_zoomAndPan: function() {
      return this.getAttribute_$$$_1('zoomAndPan');
    }
    ,
    set_zoomAndPan: function(value) {
      this.setAttribute_$$$_1('zoomAndPan', value);
      return value;
    }
    ,
    get_x: function() {
      return this._domElement.x.baseVal.value;
    }
    ,
    set_x: function(value) {
      this.setAttribute_$$$_1('x', value);
      return value;
    }
    ,
    get_xLength: function() {
      return this._domElement.x.baseVal;
    }
    ,
    set_xLength: function(value) {
      this.setAttribute_$$$_1('x', value.toString());
      return value;
    }
    ,
    get_xAnimLength: function() {
      return this._domElement.x.animVal;
    }
    ,
    get_y: function() {
      return this._domElement.y.baseVal.value;
    }
    ,
    set_y: function(value) {
      this.setAttribute_$$$_1('y', value.toString());
      return value;
    }
    ,
    get_yLength: function() {
      return this._domElement.y.baseVal;
    }
    ,
    set_yLength: function(value) {
      this.setAttribute_$$$_1('x', value.toString());
      return value;
    }
    ,
    get_yAnimLength: function() {
      return this._domElement.y.animVal;
    }
    ,
    get_width: function() {
      return this._domElement.width.baseVal;
    }
    ,
    set_width: function(value) {
      this.setAttribute_$$$_1('width', value.toString());
      return value;
    }
    ,
    get_animWidth: function() {
      return this._domElement.width.animVal;
    }
    ,
    get_height: function() {
      return this._domElement.height.baseVal;
    }
    ,
    set_height: function(value) {
      this.setAttribute_$$$_1('height', value);
      return value;
    }
    ,
    get_animHeight: function() {
      return this._domElement.height.animVal;
    }
    ,
    get_viewBox: function() {
      return this._domElement.viewBox.baseVal;
    }
    ,
    set_viewBox: function(value) {
      this.setAttribute_$$$_1('viewBox', value.toString());
      return value;
    }
    ,
    get_animViewBox: function() {
      return this._domElement.viewBox.animVal;
    }
    ,
    set_animViewBox: function(value) {
      this.setAttribute_$$$_1('viewBox', value.toString());
      return value;
    }
    ,
    get_preserveAspectRatio: function() {
      return PreserveAspectRatioType._parse(this.getAttribute_$$$_1('preserveAspectRatio'));
    }
    ,
    set_preserveAspectRatio: function(value) {
      this.setAttribute_$$$_1('preserveAspectRatio', value.toString());
      return value;
    }

  };

  // SystemQut.Svg.SvgGroup

  function SvgGroup(parent, attributes) {
    SvgContainer.call(this, 'g', parent, attributes);
  }

  var SvgGroup$ = {

  };

  // SystemQut.Svg.SvgRectangle

  function SvgRectangle(parent, x, y, width, height, attributes) {
    SvgDrawingElement.call(this, 'rect', parent, attributes);
    this.set_x(x);
    this.set_y(y);
    this.set_width(width);
    this.set_height(height);
  }

  var SvgRectangle$ = {
    get_x: function() {
      return this.getAttribute_$$$_1('x');
    }
    ,
    set_x: function(value) {
      this.setAttribute_$$$_1('x', value);
      return value;
    }
    ,
    get_y: function() {
      return this.getAttribute_$$$_1('y');
    }
    ,
    set_y: function(value) {
      this.setAttribute_$$$_1('y', value);
      return value;
    }
    ,
    get_width: function() {
      return this.getAttribute_$$$_1('width');
    }
    ,
    set_width: function(value) {
      this.setAttribute_$$$_1('width', value);
      return value;
    }
    ,
    get_height: function() {
      return this.getAttribute_$$$_1('height');
    }
    ,
    set_height: function(value) {
      this.setAttribute_$$$_1('height', value);
      return value;
    }

  };

  var $exports = ss.module('SystemQut_Client',
    {
      AvlNode: [ AvlNode, AvlNode$, null ],
      AvlNodeEnumerator_$$$_2: [ AvlNodeEnumerator_$$$_2, AvlNodeEnumerator_$$$_2$, null, ss.IEnumerator ],
      KeyEnumerator_$$$_2: [ KeyEnumerator_$$$_2, KeyEnumerator_$$$_2$, null, ss.IEnumerator ],
      EmptyCollection_$$$_1: [ EmptyCollection_$$$_1, EmptyCollection_$$$_1$, null, ss.IEnumerable, ss.IEnumerator ],
      Projection_$$$_2: [ Projection_$$$_2, Projection_$$$_2$, null, ss.IEnumerable ],
      ProjectionIterator_$$$_2: [ ProjectionIterator_$$$_2, ProjectionIterator_$$$_2$, null, ss.IEnumerator ],
      FilteredCollection_$$$_1: [ FilteredCollection_$$$_1, FilteredCollection_$$$_1$, null, ss.IEnumerable ],
      FilteredCollectionEnumerator_$$$_1: [ FilteredCollectionEnumerator_$$$_1, FilteredCollectionEnumerator_$$$_1$, null, ss.IEnumerator ],
      XmlElementEnumerator: [ XmlElementEnumerator, XmlElementEnumerator$, null, ss.IEnumerator ],
      XmlLexer: [ XmlLexer, XmlLexer$, null ],
      ProjectedList: [ ProjectedList, ProjectedList$, null, ss.IEnumerable, ss.IEnumerator ],
      RecordButtonUtil: [ RecordButtonUtil, null, null ],
      NullTextWriter: [ NullTextWriter, NullTextWriter$, TextWriter ],
      XmlCDataNode: [ XmlCDataNode, XmlCDataNode$, Node ],
      XmlCommentNode: [ XmlCommentNode, XmlCommentNode$, Node ],
      XmlDeclarationNode: [ XmlDeclarationNode, XmlDeclarationNode$, Node ],
      XmlProcessingInstructionNode: [ XmlProcessingInstructionNode, XmlProcessingInstructionNode$, Node ]
    },
    {
      Fuzzy: Fuzzy,
      XmlNodeType: XmlNodeType,
      DataBindingMode: DataBindingMode,
      VerticalAlignment: VerticalAlignment,
      HorizontalAlignment: HorizontalAlignment,
      SvgLengthType: SvgLengthType,
      IEquatable_$$$_1: [ IEquatable_$$$_1 ],
      ITypedArray_$$$_1: [ ITypedArray_$$$_1 ],
      IComparable: [ IComparable ],
      IComparer_$$$_1: [ IComparer_$$$_1 ],
      ISet_$$$_1: [ ISet_$$$_1 ],
      INotifyPropertyChanged: [ INotifyPropertyChanged ],
      ICodeBehind: [ ICodeBehind ],
      ISvgAnimatedLength: [ ISvgAnimatedLength ],
      ISvgAnimatedRect: [ ISvgAnimatedRect ],
      ISvgLength: [ ISvgLength ],
      ISvgMatrix: [ ISvgMatrix ],
      ISvgRect: [ ISvgRect ],
      Arrays: [ Arrays, null, null ],
      Chars: [ Chars, null, null ],
      Comparisons: [ Comparisons, null, null ],
      Convert: [ Convert, null, null ],
      Int32Constants: [ Int32Constants, null, null ],
      Uint32Constants: [ Uint32Constants, null, null ],
      Pair_$$$_2: [ Pair_$$$_2, Pair_$$$_2$, null ],
      Rand: [ Rand, Rand$, null ],
      HtmlUtil: [ HtmlUtil, null, null ],
      Enum: [ Enum, null, null ],
      Objects: [ Objects, null, null ],
      Assert: [ Assert, null, null ],
      AvlTree_$$$_2: [ AvlTree_$$$_2, AvlTree_$$$_2$, null, ss.IEnumerable ],
      HashSet_$$$_1: [ HashSet_$$$_1, HashSet_$$$_1$, null, ss.IEnumerable ],
      SortedSet_$$$_1: [ SortedSet_$$$_1, SortedSet_$$$_1$, null, ISet_$$$_1, ss.ICollection, ss.IEnumerable ],
      CsvIO: [ CsvIO, CsvIO$, null ],
      Enumerable: [ Enumerable, null, null ],
      TextReader: [ TextReader, TextReader$, null ],
      TextWriter: [ TextWriter, TextWriter$, null ],
      TestFramework: [ TestFramework, null, null ],
      XmlDocument: [ XmlDocument, XmlDocument$, null ],
      Node: [ Node, Node$, null ],
      XmlReader: [ XmlReader, XmlReader$, null ],
      Binding: [ Binding, Binding$, null ],
      CollectionChangedEventArgs: [ CollectionChangedEventArgs, CollectionChangedEventArgs$, null ],
      FilteredList_$$$_2: [ FilteredList_$$$_2, FilteredList_$$$_2$, null, ss.IEnumerable, ss.IEnumerator ],
      ObservableList: [ ObservableList, ObservableList$, null, ss.IEnumerable ],
      CodeBehind: [ CodeBehind, CodeBehind$, null, ICodeBehind, ss.IDisposable, INotifyPropertyChanged ],
      Point: [ Point, Point$, null ],
      AttrQualifier: [ AttrQualifier, AttrQualifier$, null ],
      CombinedSelector: [ CombinedSelector, CombinedSelector$, null ],
      Selector: [ Selector, Selector$, null ],
      PreserveAspectRatioType: [ PreserveAspectRatioType, PreserveAspectRatioType$, null ],
      SvgAnimatedLength: [ SvgAnimatedLength, SvgAnimatedLength$, null, ISvgAnimatedLength ],
      SvgLength: [ SvgLength, SvgLength$, null, ISvgLength ],
      Transform: [ Transform, Transform$, null ],
      Svg: [ Svg, null, null ],
      SvgRect: [ SvgRect, SvgRect$, null, ISvgRect ],
      ServiceResponse_$$$_1: [ ServiceResponse_$$$_1, ServiceResponse_$$$_1$, null ],
      StringWriter: [ StringWriter, StringWriter$, TextWriter ],
      StringReader: [ StringReader, StringReader$, TextReader ],
      Element: [ Element, Element$, Node, ss.IEnumerable ],
      TextNode: [ TextNode, TextNode$, Node ],
      Button: [ Button, Button$, CodeBehind ],
      CheckBox: [ CheckBox, CheckBox$, CodeBehind, INotifyPropertyChanged ],
      RecordNavigator: [ RecordNavigator, RecordNavigator$, CodeBehind ],
      Select: [ Select, Select$, CodeBehind ],
      SelectItem: [ SelectItem, SelectItem$, CodeBehind ],
      DataGrid: [ DataGrid, DataGrid$, CodeBehind ],
      DataGridCell: [ DataGridCell, DataGridCell$, CodeBehind ],
      DataGridColumnDefinition: [ DataGridColumnDefinition, DataGridColumnDefinition$, CodeBehind ],
      DataGridRow: [ DataGridRow, DataGridRow$, CodeBehind, ss.IEnumerable ],
      TextControl: [ TextControl, TextControl$, CodeBehind ],
      TextBox: [ TextBox, TextBox$, CodeBehind ],
      Upload: [ Upload, Upload$, CodeBehind ],
      SimpleSelectorSeq: [ SimpleSelectorSeq, SimpleSelectorSeq$, Selector ],
      SelectorCombo: [ SelectorCombo, SelectorCombo$, Selector ],
      SimpleSelector: [ SimpleSelector, SimpleSelector$, Selector ],
      SelectorGroup: [ SelectorGroup, SelectorGroup$, Selector ],
      SvgElement: [ SvgElement, SvgElement$, CodeBehind ],
      ArgumentException: [ ArgumentException, ArgumentException$, Error ],
      ArgumentNullException: [ ArgumentNullException, ArgumentNullException$, Error ],
      ArgumentOutOfRangeException: [ ArgumentOutOfRangeException, ArgumentOutOfRangeException$, Error ],
      FormatException: [ FormatException, FormatException$, Error ],
      InvalidDataException: [ InvalidDataException, InvalidDataException$, Error ],
      InvalidOperationException: [ InvalidOperationException, InvalidOperationException$, Error ],
      OutOfMemoryException: [ OutOfMemoryException, OutOfMemoryException$, Error ],
      XmlException: [ XmlException, XmlException$, Error ],
      NotImplementedException: [ NotImplementedException, NotImplementedException$, Error ],
      PlaceHolder: [ PlaceHolder, PlaceHolder$, Element ],
      PropertyChangedEventArgs: [ PropertyChangedEventArgs, PropertyChangedEventArgs$, ss.EventArgs ],
      DataGridNumericCell: [ DataGridNumericCell, DataGridNumericCell$, DataGridCell ],
      DataGridNumericColumn: [ DataGridNumericColumn, DataGridNumericColumn$, DataGridColumnDefinition ],
      SvgButton: [ SvgButton, SvgButton$, Button ],
      DataGridCheckBoxCell: [ DataGridCheckBoxCell, DataGridCheckBoxCell$, DataGridCell ],
      DataGridTextCell: [ DataGridTextCell, DataGridTextCell$, DataGridCell ],
      DataGridCheckBoxColumn: [ DataGridCheckBoxColumn, DataGridCheckBoxColumn$, DataGridColumnDefinition ],
      DataGridTextColumn: [ DataGridTextColumn, DataGridTextColumn$, DataGridColumnDefinition ],
      ElementEventArgs: [ ElementEventArgs, ElementEventArgs$, ss.EventArgs ],
      Control: [ Control, Control$, Object ],
      NegationQualfier: [ NegationQualfier, NegationQualfier$, SimpleSelector ],
      CssQualifier: [ CssQualifier, CssQualifier$, SimpleSelector ],
      TypeSelector: [ TypeSelector, TypeSelector$, SimpleSelector ],
      SvgDrawingElement: [ SvgDrawingElement, SvgDrawingElement$, SvgElement ],
      SvgContainer: [ SvgContainer, SvgContainer$, SvgElement, ss.IEnumerable ],
      GotoFirstRecordButton: [ GotoFirstRecordButton, GotoFirstRecordButton$, SvgButton ],
      GotoLastRecordButton: [ GotoLastRecordButton, GotoLastRecordButton$, SvgButton ],
      GotoNextRecordButton: [ GotoNextRecordButton, GotoNextRecordButton$, SvgButton ],
      GotoPreviousRecordButton: [ GotoPreviousRecordButton, GotoPreviousRecordButton$, SvgButton ],
      ClassQualifier: [ ClassQualifier, ClassQualifier$, CssQualifier ],
      IdentQualifier: [ IdentQualifier, IdentQualifier$, CssQualifier ],
      SvgPolygon: [ SvgPolygon, SvgPolygon$, SvgDrawingElement ],
      SvgEllipse: [ SvgEllipse, SvgEllipse$, SvgDrawingElement ],
      SvgCircle: [ SvgCircle, SvgCircle$, SvgDrawingElement ],
      SvgPolyLine: [ SvgPolyLine, SvgPolyLine$, SvgDrawingElement ],
      SvgLine: [ SvgLine, SvgLine$, SvgDrawingElement ],
      SvgText: [ SvgText, SvgText$, SvgDrawingElement ],
      SvgSvg: [ SvgSvg, SvgSvg$, SvgContainer ],
      SvgGroup: [ SvgGroup, SvgGroup$, SvgContainer ],
      SvgRectangle: [ SvgRectangle, SvgRectangle$, SvgDrawingElement ]
    });

  Chars.nullChar = String.fromCharCode(0);
  Int32Constants.minValue = -2147483648;
  Int32Constants.maxValue = 2147483647;
  Uint32Constants.minValue = 0;
  Uint32Constants.maxValue = 4294967295;
  HtmlUtil._uniqueId = 0;
  CsvIO.defaultSeparator = ',';
  CsvIO.defaultQuoteChar = '"';
  CsvIO._EOF = -1;
  CsvIO._CRLF = -2;
  CsvIO._EOS = -3;
  TextReader.NUL = '\u0000';
  TextReader.CR = '\r';
  TextReader.LF = '\n';
  TextWriter.nul = new NullTextWriter();
  CodeBehind._types = {};
  AttrQualifier.EQUALS = '=';
  AttrQualifier.containS_WORD = '~=';
  AttrQualifier.equaL_OR_HYPHENATED = '|=';
  AttrQualifier.startS_WITH = '^=';
  AttrQualifier.endS_WITH = '$=';
  AttrQualifier.CONTAINS = '*=';
  CombinedSelector.DESCENDANT = ' ';
  CombinedSelector.CHILD = '>';
  CombinedSelector.immediatelY_FOLLOWED_BY = '+';
  CombinedSelector.followeD_BY = '~';

  return $exports;
});
