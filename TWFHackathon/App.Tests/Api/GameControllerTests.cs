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

        [Fact]
        public void Test()
        {
            var controller = new GameController(_fake);

            var result = controller.Get();

            Assert.NotNull(result);
        }
    }

}
