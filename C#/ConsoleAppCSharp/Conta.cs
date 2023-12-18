using System.ComponentModel;

namespace ConsoleAppCSharp
{
    public abstract class Conta
    {
        /// <summary>
        /// olha que maneiro =)
        /// </summary>
        private decimal _saldo;
        private int _agencia;
        private int _numConta;

        /// <summary>
        /// Construtor vazio, sem parametros, no C# os construtor pôssuem o mesmo nome da classe.
        /// </summary>
        public Conta() { }

        public Conta(int ag, int ct)
        {
            this._agencia = ag;
            this._numConta = ct;
        }

        public decimal Saldo
        {
            get => _saldo;
            set
            {
                if (value > 0)
                    _saldo += value;
            }
        }

        public int Agencia
        {
            get => _agencia;
            set
            {
                if (value > 0)
                    _agencia = value;
            }
        }
        public int NumConta
        {
            get => _numConta;
            set
            {
                if (value > 0)
                    _numConta = value;
            }
        }

        public abstract string Rendimentojuros();

        public string Depositar(Conta c, decimal valor)
        {
            if (c != null && valor > 0)
            {
                c.Saldo = valor;
                return $"Deposito de R${valor:N2} realizado na conta {c.NumConta}. Saldo: R${c.Saldo:N2}";
            }
            else
            {
                return "Ocorreu um erro";
            }
        }

        public string Sacar(Conta ct, decimal valor){
              if (ct != null && ct.Saldo >= valor)
            {
                ct._saldo -= valor;
                return $"Saque de R${valor:N2} realizado na conta {ct.NumConta}. Saldo: R${ct.Saldo:N2}";
            }
            else
            {
                return "Ocorreu um erro";
            }
        }

        public string Emprestimo()
        {
            return "Emprestimo realizado com sucesso";
        }

        public string Emprestimo( double valor, DateTime data)
        {
            return $"Emprestimo no valor de R${valor:N2} realizado realizado em {data}";
        }
    }

}