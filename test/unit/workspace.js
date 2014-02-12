var chai      = require('chai'),
    assert    = require('assert'),
    Workspace = require('../../lib/models/workspace');

describe('WorkSpace', function () {
  describe('#new', function () {
    var workspace;
    beforeEach(function () {
      workspace = new Workspace();
    });

    it('does not have an id');
    it('does not have a timestamp');
    it('does not have a name');
    it('does not have a token');
    describe('#save', function () {
      it('has an id');
      it('has a timestamp');
      it('has a name');
      it('has a token');
      describe('#update', function () {
        it('changes the name');
      });
      describe('#destroy', function () {
        it('destroys the workspace');
      });
    });
  });
});
