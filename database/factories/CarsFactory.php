<?php

namespace Database\Factories;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cars>
 */
class CarsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $colors = ['gray', 'red', 'yellow', 'green', 'purple'];

        return [
            'name' => $this->faker->company,
            'model' => $this->faker->text(15),
            'color' => $this->faker->randomElement($colors)
        ];
    }
}
