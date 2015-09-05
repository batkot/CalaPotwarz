using System;
using System.Collections.Generic;

namespace App.Domino
{
    public class CategoriesProvider
    {
        private List<string> _categories;

        public CategoriesProvider(List<string> categories)
        {
            _categories = categories;
        }
        public string DrawCategory()
        {
            return _categories[_rand.Next(_categories.Count)];
        }

        private static Random _rand = new Random(Guid.NewGuid().GetHashCode());
    }
}
