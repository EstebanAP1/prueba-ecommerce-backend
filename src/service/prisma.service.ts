import { Injectable, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect()
    await this.seed()
  }

  async seed() {
    const userCount = await this.user.count()
    const categoriesCount = await this.category.count()
    const productsCount = await this.product.count()

    if (userCount !== 0 || categoriesCount !== 0 || productsCount !== 0) return

    await this.user.create({
      data: {
        name: 'Americana',
        username: 'prueba@americana.com',
        password: 'americana'
      }
    })

    const shirtsCategory = await this.category.create({
      data: {
        name: 'Shirts'
      }
    })

    await this.product.createMany({
      data: [
        {
          name: 'Polo Classy',
          description: 'Camisa de talle clásico',
          price: 200000,
          stock: 14,
          discount: 10,
          image: 'https://via.placeholder.com/150',
          categoryId: shirtsCategory.id
        },
        {
          name: 'Polo Ralph Trait',
          description: 'Camisa de seda libanesa',
          price: 250000,
          stock: 8,
          discount: 5,
          image: 'https://via.placeholder.com/150',
          categoryId: shirtsCategory.id
        },
        {
          name: 'Lacoste Lefleire',
          description: 'Camisa blue-collection',
          price: 320000,
          stock: 3,
          discount: 40,
          image: 'https://via.placeholder.com/150',
          categoryId: shirtsCategory.id
        },
        {
          name: 'Lacoste Parma',
          description: 'Camisa hecha de tela italiana',
          price: 280000,
          stock: 0,
          discount: 50,
          image: 'https://via.placeholder.com/150',
          categoryId: shirtsCategory.id
        },
        {
          name: 'Hugo Boss Cypher',
          description: 'Camisa de tela deportiva',
          price: 180000,
          stock: 2,
          discount: 5,
          image: 'https://via.placeholder.com/150',
          categoryId: shirtsCategory.id
        }
      ]
    })

    const jeansCategory = await this.category.create({
      data: {
        name: 'Jeans'
      }
    })

    await this.product.createMany({
      data: [
        {
          name: "Levi's 501 Original",
          description: 'Classic straight fit jeans',
          price: 150000,
          stock: 20,
          discount: 10,
          image: 'https://via.placeholder.com/150',
          categoryId: jeansCategory.id
        },
        {
          name: 'Wrangler Authentics',
          description: 'Comfort flex waistband',
          price: 120000,
          stock: 25,
          discount: 5,
          image: 'https://via.placeholder.com/150',
          categoryId: jeansCategory.id
        },
        {
          name: 'Lee Extreme Motion',
          description: 'Straight fit tapered leg jeans',
          price: 130000,
          stock: 15,
          discount: 20,
          image: 'https://via.placeholder.com/150',
          categoryId: jeansCategory.id
        },
        {
          name: 'Calvin Klein Slim Fit',
          description: 'Slim fit denim jeans',
          price: 200000,
          stock: 10,
          discount: 15,
          image: 'https://via.placeholder.com/150',
          categoryId: jeansCategory.id
        },
        {
          name: 'Diesel D-Strukt',
          description: 'Slim fit clean jeans',
          price: 220000,
          stock: 5,
          discount: 0,
          image: 'https://via.placeholder.com/150',
          categoryId: jeansCategory.id
        }
      ]
    })

    const shoesCategory = await this.category.create({
      data: {
        name: 'Shoes'
      }
    })

    await this.product.createMany({
      data: [
        {
          name: 'Nike Air Max',
          description: 'Comfortable running shoes',
          price: 300000,
          stock: 30,
          discount: 10,
          image: 'https://via.placeholder.com/150',
          categoryId: shoesCategory.id
        },
        {
          name: 'Adidas Ultraboost',
          description: 'High-performance shoes',
          price: 350000,
          stock: 20,
          discount: 5,
          image: 'https://via.placeholder.com/150',
          categoryId: shoesCategory.id
        },
        {
          name: 'Puma Suede Classic',
          description: 'Iconic casual shoes',
          price: 200000,
          stock: 25,
          discount: 0,
          image: 'https://via.placeholder.com/150',
          categoryId: shoesCategory.id
        },
        {
          name: 'Reebok Club C',
          description: 'Classic leather shoes',
          price: 250000,
          stock: 18,
          discount: 0,
          image: 'https://via.placeholder.com/150',
          categoryId: shoesCategory.id
        },
        {
          name: 'Converse Chuck Taylor',
          description: 'All-Star canvas shoes',
          price: 180000,
          stock: 22,
          discount: 0,
          image: 'https://via.placeholder.com/150',
          categoryId: shoesCategory.id
        }
      ]
    })

    const accessoriesCategory = await this.category.create({
      data: {
        name: 'Accessories'
      }
    })

    await this.product.createMany({
      data: [
        {
          name: 'Ray-Ban Sunglasses',
          description: 'Classic aviator sunglasses',
          price: 400000,
          stock: 15,
          discount: 10,
          image: 'https://via.placeholder.com/150',
          categoryId: accessoriesCategory.id
        },
        {
          name: 'Fossil Leather Wallet',
          description: 'Genuine leather wallet',
          price: 100000,
          stock: 50,
          discount: 5,
          image: 'https://via.placeholder.com/150',
          categoryId: accessoriesCategory.id
        },
        {
          name: 'Apple Watch Series 6',
          description: 'Smartwatch with fitness tracking',
          price: 500000,
          stock: 10,
          discount: 0,
          image: 'https://via.placeholder.com/150',
          categoryId: accessoriesCategory.id
        },
        {
          name: 'Hermes Silk Scarf',
          description: 'Luxurious silk scarf',
          price: 300000,
          stock: 5,
          discount: 0,
          image: 'https://via.placeholder.com/150',
          categoryId: accessoriesCategory.id
        },
        {
          name: 'Gucci Leather Belt',
          description: 'High-quality leather belt',
          price: 350000,
          stock: 8,
          discount: 0,
          image: 'https://via.placeholder.com/150',
          categoryId: accessoriesCategory.id
        }
      ]
    })

    console.log('Database seeded')
  }
}
