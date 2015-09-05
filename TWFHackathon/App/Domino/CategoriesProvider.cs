using App.Models;
using System;
using System.Collections.Generic;

namespace App.Domino
{
    public class CategoriesProvider : ICanDrawDominoTile
    {
        private List<Category> _categories;

        public CategoriesProvider(List<Category> categories)
        {
            _categories = categories;
        }
        public DominoTile DrawTile()
        {
            var category = _categories[_rand.Next(_categories.Count)];
            var picture = category.Pictures[_rand.Next(category.Pictures.Count)];
            var picturePath = string.Format(@"gfx/pics/{0}/{1}", category.Name, picture);
            return new DominoTile(category.Name, picturePath);
        }

        private static Random _rand = new Random(Guid.NewGuid().GetHashCode());
    }
}
