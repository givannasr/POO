// O conceito de namespace foi criado para nos ajudar a organizar melhor nossos codigos.
// Eles podem ser entendidos como "categorias" ou "blocos" que contém trechos de codigos.

namespace ConsoleAppCSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Heloo, world!");
            Console.WriteLine("\n ================ Teste conta 1 =================");

            ContaCorrente cc1 = new ContaCorrente();
            cc1.Agencia = 1234;
            cc1.NumConta = 9876;
            Console.WriteLine($"Agencia numeros:{cc1.Agencia}, Conta número:{cc1.NumConta}");

            Console.WriteLine(cc1.Depositar(cc1, 500));
            Console.WriteLine(cc1.Depositar(cc1, 5000));
            Console.WriteLine(cc1.Sacar(cc1, 500));

            Console.WriteLine("\n ================ Teste conta 2 =================");

            ContaPoupanca cp1 = new ContaPoupanca(1325,3456,0.02);
            // cp1.Agencia = 1325;
            // cp1.NumConta = 3456;
            Console.WriteLine($"Agencia numeros:{cp1.Agencia}, Conta número:{cp1.NumConta}");

            Console.WriteLine(cp1.Depositar(cp1, 500));
            Console.WriteLine(cp1.Depositar(cp1, 5000));
            Console.WriteLine(cp1.Sacar(cp1, 500));
            Console.WriteLine(cp1.Rendimentojuros());
            Console.WriteLine(cp1.Emprestimo());
            Console.WriteLine(cp1.Emprestimo(500,new DateTime(2023,11,10)));
        }
    }
}
