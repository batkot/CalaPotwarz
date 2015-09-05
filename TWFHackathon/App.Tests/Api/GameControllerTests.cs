using App.Controllers.Api;
using FakeItEasy;
using Xunit;

namespace App.Tests.Api
{
    public class GameControllerTests
    {
        private IFoo _fake;

        public GameControllerTests()
        {
            _fake = A.Fake<IFoo>();
        }

        [Fact]
        public void Test()
        {
            var controller = new GameController(_fake);
        }
    }
}
