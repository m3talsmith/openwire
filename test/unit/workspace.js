var chai      = require('chai'),
    assert    = require('assert'),
    Workspace = require('../../lib/models/workspace');

describe('WorkSpace', function () {
  describe('#new', function () {
    var workspace;

    describe('#save', function () {
      beforeEach(function () {
        workspace = new Workspace();
      });


      afterEach(function () {
        workspace.destroy();
      });

      it('gets an id', function () {
        assert(!workspace.id);
        workspace.save();
        assert(workspace.id);
      });

      it('has a timestamp', function () {
        assert(!workspace.timestamp);
        workspace.save();
        assert(workspace.timestamp);
      });

      it('has a token', function () {
        assert(!workspace.token);
        workspace.save();
        assert(workspace.token);
      });

      it('has a name', function () {
        assert(!workspace.name);
        workspace.save();
        assert(workspace.name);
        assert_equal(workspace.token, workspace.name);
      });
    });
  });
});
