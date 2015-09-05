using App.Controllers.Api;
using App.Domino;
using FakeItEasy;
using Xunit;

namespace App.Tests.Api
{
    public class GameControllerTests
    {
        private ICanCreateGame _fake;

        public GameControllerTests()
        {
            _fake = A.Fake<ICanCreateGame>();
        }
    }

}
