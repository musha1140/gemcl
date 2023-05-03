from collections import defaultdict

gem_values = {
    "topaz": [0, 8, 16, 32, 56, 92, 148, 216, 296, 392],
    "citrine": [0, 8, 16, 32, 56, 92, 148, 216, 296, 392],
    "sapphire": [0, 8, 16, 32, 56, 92, 148, 216, 296, 392],
    "aquamarine": [0, 8, 16, 32, 56, 92, 148, 216, 296, 392],
    "tourmaline": [0, 8, 16, 32, 56, 92, 148, 216, 296, 392],
    "ruby": [0, 80, 160, 320, 560, 960, 1480, 2160, 2960, 3920],
}

gem_attributes = {
    "topaz": "willpower",
    "citrine": "willpower",
    "sapphire": "fortitude",
    "aquamarine": "fortitude",
    "tourmaline": "strength",
    "ruby": "vitality",
}

def calculate_attributes(gem_selections):
    total_attributes = defaultdict(int)

    for gem_type, gem_rank in gem_selections:
        attribute = gem_attributes[gem_type]
        attribute_value = gem_values[gem_type][gem_rank - 1]
        total_attributes[attribute] += attribute_value

    return dict(total_attributes)

# Example usage:
gem_selections = [
    ("topaz", 3),
    ("citrine", 5),
    ("sapphire", 2),
    ("aquamarine", 7),
    ("tourmaline", 4),
    ("ruby", 8),
]

result = calculate_attributes(gem_selections)
print(result)